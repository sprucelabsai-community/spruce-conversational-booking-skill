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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-services-with-providers',
						name: 'Can list services with providers',
						defaults: {
							anonymous: {
								default: true,
							},
							skill: true,
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default listServicesWithProvidersEventContract

export type ListServicesWithProvidersEventContract =
	typeof listServicesWithProvidersEventContract
