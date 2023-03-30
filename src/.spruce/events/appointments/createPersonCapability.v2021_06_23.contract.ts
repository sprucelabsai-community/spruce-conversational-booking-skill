import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import createPersonCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityEmitTargetAndPayload.schema'
import createPersonCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityResponsePayload.schema'

const createPersonCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-person-capability::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-configure-people-capabilities'],
			},

			emitPayloadSchema: createPersonCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: createPersonCapabilityResponsePayloadSchema,
		},
	},
})
export default createPersonCapabilityEventContract

export type CreatePersonCapabilityEventContract =
	typeof createPersonCapabilityEventContract
