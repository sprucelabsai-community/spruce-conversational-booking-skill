import { SpruceSchemas } from '@sprucelabs/mercury-types'

export type ServiceWithProviders = Pick<
	SpruceSchemas.Appointments.v2021_06_23.ServiceWithProviders,
	'id' | 'name'
> & {
	providers: Pick<
		SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersProvider,
		'id' | 'casualName'
	>[]
}

export type ProviderAndService =
	SpruceSchemas.Appointments.v2021_06_23.ProviderAndService
