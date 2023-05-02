import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import deleteServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteServiceEmitTargetAndPayload.schema'
import deleteServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteServiceResponsePayload.schema'

const deleteServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.delete-service::v2021_06_23': {
			emitPayloadSchema: deleteServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.deleteServiceEmitPermissions',
				name: 'Delete Service',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-delete-service',
						name: 'Can delete service',
						defaults: {
							owner: {
								default: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default deleteServiceEventContract

export type DeleteServiceEventContract = typeof deleteServiceEventContract
