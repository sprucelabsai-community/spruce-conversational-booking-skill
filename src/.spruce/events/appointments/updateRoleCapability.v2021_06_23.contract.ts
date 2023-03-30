import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import updateRoleCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityEmitTargetAndPayload.schema'
import updateRoleCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityResponsePayload.schema'

const updateRoleCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-role-capability::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-configure-role-capabilities'],
			},

			emitPayloadSchema: updateRoleCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateRoleCapabilityResponsePayloadSchema,
		},
	},
})
export default updateRoleCapabilityEventContract

export type UpdateRoleCapabilityEventContract =
	typeof updateRoleCapabilityEventContract
