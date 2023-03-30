import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import createRoleCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityEmitTargetAndPayload.schema'
import createRoleCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityResponsePayload.schema'

const createRoleCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-role-capability::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-configure-role-capabilities'],
			},

			emitPayloadSchema: createRoleCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: createRoleCapabilityResponsePayloadSchema,
		},
	},
})
export default createRoleCapabilityEventContract

export type CreateRoleCapabilityEventContract =
	typeof createRoleCapabilityEventContract
