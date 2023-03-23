import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateRoleCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityEmitTargetAndPayload.schema'
import updateRoleCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityResponsePayload.schema'

const updateRoleCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-role-capability::v2021_06_23': {
			emitPayloadSchema: updateRoleCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateRoleCapabilityResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateRoleCapabilityEmitPermissions',
				name: 'Update role capability',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-role-capability',
						name: 'Can update a role capability',
						defaults: {
							owner: {
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
export default updateRoleCapabilityEventContract

export type UpdateRoleCapabilityEventContract =
	typeof updateRoleCapabilityEventContract
