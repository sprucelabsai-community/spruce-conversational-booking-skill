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
	private static serviceId1: string
	private static serviceId2: string
	private static providerId1: string
	private static providerId2: string

	protected static async beforeEach() {
		await super.beforeEach()

		this.servicesWithProviders = []

		this.serviceId1 = id()
		this.serviceId2 = id()
		this.providerId1 = id()
		this.providerId2 = id()
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
		this.addFirstServiceWithFirstProvider()

		await this.assertResolvesAsExpected(
			[this.serviceId1],
			[this.providerId1],
			[
				{
					serviceId: this.serviceId1,
					providerId: this.providerId1,
				},
			]
		)
	}

	@test()
	protected static async matchesMultipleServicesWithTheSameProvider() {
		this.addFirstServiceWithFirstProvider()

		this.addService({
			id: this.serviceId2,
			providers: [this.providerId1],
		})

		await this.assertResolvesAsExpected(
			[this.serviceId1, this.serviceId2],
			[this.providerId1],
			[
				{
					serviceId: this.serviceId1,
					providerId: this.providerId1,
				},
				{
					serviceId: this.serviceId2,
					providerId: this.providerId1,
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
		this.addFirstServiceWithFirstProvider()

		this.addService({
			id: this.serviceId2,
			providers: [this.providerId2],
		})

		await this.assertResolvesAsExpected(
			[this.serviceId1, this.serviceId2],
			[this.providerId1, this.providerId2],
			[
				{
					serviceId: this.serviceId1,
					providerId: this.providerId1,
				},
				{
					serviceId: this.serviceId2,
					providerId: this.providerId2,
				},
			]
		)
	}

	@test()
	protected static async asksForMissingTeammate() {}

	private static addFirstServiceWithFirstProvider() {
		this.addService({
			id: this.serviceId1,
			providers: [this.providerId1],
		})
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
