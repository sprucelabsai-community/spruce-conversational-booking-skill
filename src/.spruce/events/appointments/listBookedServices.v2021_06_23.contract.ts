import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listBookedServicesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listBookedServicesEmitTargetAndPayload.schema'
import listBookedServicesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listBookedServicesResponsePayload.schema'

const listBookedServicesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-booked-services::v2021_06_23': {
			emitPayloadSchema: listBookedServicesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listBookedServicesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listBookedServicesEmitPermissions',
				name: 'list booked services',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-booked-services',
						name: 'Can list booked services',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								default: true,
							},
							manager: {
								default: true,
							},
							teammate: {
								default: true,
							},
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default listBookedServicesEventContract

export type ListBookedServicesEventContract =
	typeof listBookedServicesEventContract
