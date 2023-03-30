import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import createHoldEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createHoldEmitTargetAndPayload.schema'
import createHoldResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createHoldResponsePayload.schema'

const createHoldEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-hold::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-hold-time'],
			},

			emitPayloadSchema: createHoldEmitTargetAndPayloadSchema,
			responsePayloadSchema: createHoldResponsePayloadSchema,
		},
	},
})
export default createHoldEventContract

export type CreateHoldEventContract = typeof createHoldEventContract
