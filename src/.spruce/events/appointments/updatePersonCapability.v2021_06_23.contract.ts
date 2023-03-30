import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import updatePersonCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityEmitTargetAndPayload.schema'
import updatePersonCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityResponsePayload.schema'

const updatePersonCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-person-capability::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-configure-people-capabilities'],
			},

			emitPayloadSchema: updatePersonCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: updatePersonCapabilityResponsePayloadSchema,
		},
	},
})
export default updatePersonCapabilityEventContract

export type UpdatePersonCapabilityEventContract =
	typeof updatePersonCapabilityEventContract
