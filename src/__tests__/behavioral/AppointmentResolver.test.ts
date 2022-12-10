import { assertOptions } from '@sprucelabs/schema'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert } from '@sprucelabs/test-utils'

export default class AppointmentResolverTest extends AbstractSpruceFixtureTest {
	@test()
	protected static async throwsWithMissing() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			AppointmentResolver.Resolver()
		)

		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['servicesWithTeammates'],
		})
	}

	@test()
	protected static async canCreateWithExpected() {
		AppointmentResolver.Resolver({
			servicesWithTeammates: [],
		})
	}
}

class AppointmentResolver {
	public static async Resolver(options: ResolverOptions) {
		assertOptions(options, ['servicesWithTeammates'])
		return new this()
	}
}

interface ResolverOptions {
	servicesWithTeammates: string[]
}
