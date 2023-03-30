import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import cancelHoldEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/cancelHoldEmitTargetAndPayload.schema'
import cancelHoldResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/cancelHoldResponsePayload.schema'

const cancelHoldEventContract = buildEventContract({
	eventSignatures: {
		'appointments.cancel-hold::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-cancel-hold'],
			},

			emitPayloadSchema: cancelHoldEmitTargetAndPayloadSchema,
			responsePayloadSchema: cancelHoldResponsePayloadSchema,
		},
	},
})
export default cancelHoldEventContract

export type CancelHoldEventContract = typeof cancelHoldEventContract
