import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listServicesWithProvidersEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listServicesWithProvidersEmitTargetAndPayload.schema'
import listServicesWithProvidersResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listServicesWithProvidersResponsePayload.schema'

const listServicesWithProvidersEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-services-with-providers::v2021_06_23': {
			emitPayloadSchema: listServicesWithProvidersEmitTargetAndPayloadSchema,
			responsePayloadSchema: listServicesWithProvidersResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listServicesWithProvidersEmitPermissions',
				name: 'List services with providers',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-services-with-providers',
						name: 'Can list services with providers',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: true,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							loggedIn: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default listServicesWithProvidersEventContract

export type ListServicesWithProvidersEventContract =
	typeof listServicesWithProvidersEventContract
