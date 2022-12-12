import { tomorrowLunch } from '@sprucelabs/calendar-utils'
import { assertOptions } from '@sprucelabs/schema'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import {
	ProviderAndService,
	ServiceWithProviders,
} from '../../conversational.types'
import { BookingEntities } from '../../extraction/EntityExtractor'

export default class AppointmentResolverTest extends AbstractSpruceFixtureTest {
	private static servicesWithProviders: ServiceWithProviders[]

	protected static async beforeEach() {
		await super.beforeEach()
		this.servicesWithProviders = []
	}

	@test()
	protected static async throwsWithMissing() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			AppointmentResolver.Resolver()
		)

		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['servicesWithProviders'],
		})
	}

	@test()
	protected static async canCreateWithExpected() {
		const servicesWithProviders: ServiceWithProviders[] = []
		this.Resolver(servicesWithProviders)
	}

	@test()
	protected static async matchesOnlyMatch() {
		const serviceId = id()
		const providerId = id()

		this.addService({
			id: serviceId,
			providers: [providerId],
		})

		await this.assertResolvesAsExpected(
			[serviceId],
			[providerId],
			[
				{
					serviceId,
					providerId,
				},
			]
		)
	}

	@test()
	protected static async matchesMultipleServicesWithTheSameProvider() {
		const serviceId1 = id()
		const serviceId2 = id()
		const providerId = id()

		this.addService({
			id: serviceId1,
			providers: [providerId],
		})

		this.addService({
			id: serviceId2,
			providers: [providerId],
		})

		await this.assertResolvesAsExpected(
			[serviceId1, serviceId2],
			[providerId],
			[
				{
					serviceId: serviceId1,
					providerId,
				},
				{
					serviceId: serviceId2,
					providerId,
				},
			]
		)
	}

	@test()
	protected static async canFindProviderWhoIsNotTheFirst() {
		const serviceId = id()
		const providerId = id()

		this.addService({
			id: serviceId,
			providers: [id(), providerId],
		})

		await this.assertResolvesAsExpected(
			[serviceId],
			[providerId],
			[
				{
					serviceId,
					providerId,
				},
			]
		)
	}

	@test()
	protected static async twoServicesWithTwoTeammates() {
		const serviceId1 = id()
		const serviceId2 = id()
		const providerId1 = id()
		const providerId2 = id()

		this.addService({
			id: serviceId1,
			providers: [providerId1],
		})

		this.addService({
			id: serviceId2,
			providers: [providerId2],
		})

		await this.assertResolvesAsExpected(
			[serviceId1, serviceId2],
			[providerId1, providerId2],
			[
				{
					serviceId: serviceId1,
					providerId: providerId1,
				},
				{
					serviceId: serviceId2,
					providerId: providerId2,
				},
			]
		)
	}

	private static addService(serviceWithProviders: {
		id: string
		providers: string[]
	}) {
		this.servicesWithProviders.push({
			...serviceWithProviders,
			providers: serviceWithProviders.providers.map((p) => ({
				id: p,
				casualName: generateId(),
			})),
			name: generateId(),
		})
	}

	private static async assertResolvesAsExpected(
		extractedServiceIds: string[],
		extractedProviderIds: string[],
		expected: { serviceId: string; providerId: string }[]
	) {
		const resolver = await this.Resolver(this.servicesWithProviders)
		const bookable = await resolver.resolve({
			services: extractedServiceIds,
			providers: extractedProviderIds,
			startDateTimeMs: tomorrowLunch(),
		})
		assert.isEqualDeep(bookable, expected)
	}

	private static async Resolver(servicesWithProviders: ServiceWithProviders[]) {
		return AppointmentResolver.Resolver({
			servicesWithProviders,
		})
	}
}

class AppointmentResolver {
	private servicesWithProviders: ServiceWithProviders[]

	private constructor(servicesWithProviders: ServiceWithProviders[]) {
		this.servicesWithProviders = servicesWithProviders
	}

	public static async Resolver(options: ResolverOptions) {
		const { servicesWithProviders } = assertOptions(options, [
			'servicesWithProviders',
		])
		return new this(servicesWithProviders)
	}

	public async resolve(
		options: Required<BookingEntities>
	): Promise<ProviderAndService[]> {
		const { services, providers } = options

		const bookable: ProviderAndService[] = []

		for (const serviceId of services) {
			const serviceWithProviders = this.servicesWithProviders.find(
				(s) => s.id === serviceId
			)!

			const providerId = providers.find(
				(id) => !!serviceWithProviders.providers.find((p) => p.id === id)
			)!

			const item = {
				serviceId: serviceWithProviders.id,
				providerId,
			}
			bookable.push(item)
		}

		return bookable
	}
}

interface ResolverOptions {
	servicesWithProviders: ServiceWithProviders[]
}
function id() {
	return generateId()
}
