import { dateUtil } from '@sprucelabs/calendar-utils'
import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import { NlpManager } from 'node-nlp'

export default class EntityExtractorTest extends AbstractSpruceTest {
	private static extractor: EntityExtractor
	protected static async beforeEach() {
		await super.beforeEach()
		this.extractor = EntityExtractor.Extractor()
	}

	@test()
	protected static async noEntitiesForEmptyString() {
		const entities = await this.extract('')
		assert.isEqualDeep(entities, {})
	}

	@test()
	protected static async canPullOutADate() {
		const entities = await this.extract('tomorrow at 3pm')
		assert.isEqualDeep(entities, {
			startDateTimeMs: dateUtil.setTimeOfDay(
				dateUtil.addDays(new Date().getTime(), 1),
				13,
				0,
				0,
				0
			),
		})

		debugger
	}

	private static async extract(utterance: string) {
		return this.extractor.extract(utterance)
	}
}

class EntityExtractor {
	private constructor() {}

	public static Extractor() {
		return new this()
	}

	public async extract(utterance: string) {
		const manager = new NlpManager({ languages: ['en'], forceNER: true })

		const results = await manager.process(utterance)
		return results.entities
	}
}
