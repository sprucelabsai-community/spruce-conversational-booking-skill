import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listServicesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listServicesEmitTargetAndPayload.schema'
import listServicesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listServicesResponsePayload.schema'

const listServicesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-services::v2021_06_23': {
			emitPayloadSchema: listServicesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listServicesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listServicesEmitPermissions',
				name: 'list services',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-services',
						name: 'Can list services',
						defaults: {
							loggedIn: {
								default: true,
							},
							anonymous: {
								default: true,
							},
							skill: true,
						},
					},
				],
			}),
		},
	},
})
export default listServicesEventContract

export type ListServicesEventContract = typeof listServicesEventContract
