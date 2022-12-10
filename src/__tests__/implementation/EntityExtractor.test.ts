import {
	dateUtil,
	startOfToday,
	tomorrowStartOfDay,
} from '@sprucelabs/calendar-utils'
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
		assert.isNull(entities)
	}

	@test()
	protected static async canExtractStartDateTime() {
		await this.assertStartDateTimeEquals(
			'tomorrow at 3pm',
			tomorrowStartOfDay(),
			15,
			0
		)

		await this.assertStartDateTimeEquals(
			'tomorrow at 4pm',
			tomorrowStartOfDay(),
			16,
			0
		)

		await this.assertStartDateTimeEquals(
			'tomorrow at 12:15pm',
			tomorrowStartOfDay(),
			12,
			15
		)

		await this.assertStartDateTimeEquals(
			'today at 1:45pm',
			startOfToday(),
			13,
			45
		)
	}

	private static async assertStartDateTimeEquals(
		utterance: string,
		date: number,
		hours: number,
		minutes: number
	) {
		const expected = dateUtil.setTimeOfDay(date, hours, minutes, 0, 0)
		const results = await this.extract(utterance)
		assert.isEqual(results?.startDateTimeMs, expected)
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

	public async extract(utterance: string): Promise<BookingEntities | null> {
		const manager = new NlpManager({ languages: ['en'], forceNER: true })

		const { entities } = (await manager.process('en', utterance)) as {
			entities: NlpEntity[]
		}

		if (entities.length === 0) {
			return null
		}

		const results: BookingEntities = {}
		const dateMatch = entities.find((e) => e.entity === 'datetime')?.resolution
			?.values?.[0]?.value

		if (dateMatch) {
			const date = new Date(dateMatch)
			results.startDateTimeMs =
				date.getTime() - date.getTimezoneOffset() * 60 * 1000
		}

		return results
	}
}

interface BookingEntities {
	startDateTimeMs?: number | null
}

interface NlpEntity {
	accuracy: number
	entity: 'datetime' | 'dimension'
	resolution: NlpResolution
}

interface NlpResolution {
	values: NlpValue[]
}

interface NlpValue {
	value: string
}
