import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateServiceEmitTargetAndPayload.schema'
import updateServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateServiceResponsePayload.schema'

const updateServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-service::v2021_06_23': {
			emitPayloadSchema: updateServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateServiceEmitPermissions',
				name: 'edit service',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-edit-service',
						name: 'Can edit service',
						defaults: {
							loggedIn: {
								default: true,
							},
							anonymous: {
								default: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default updateServiceEventContract

export type UpdateServiceEventContract = typeof updateServiceEventContract
