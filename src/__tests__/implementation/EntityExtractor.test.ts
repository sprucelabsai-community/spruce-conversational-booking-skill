import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'

export default class EntityExtractorTest extends AbstractSpruceTest {
	@test()
	protected static async canCreateEntityExtractor() {
		const entityExtractor = EntityExtractor.Extractor()
		assert.isTruthy(entityExtractor)
	}
}

class EntityExtractor {
	public static Extractor() {
		return new this()
	}
}
