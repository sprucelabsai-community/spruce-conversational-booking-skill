import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import createEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createEmitTargetAndPayload.schema'
import createResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createResponsePayload.schema'

const createEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-create-appointment'],
			},

			emitPayloadSchema: createEmitTargetAndPayloadSchema,
			responsePayloadSchema: createResponsePayloadSchema,
		},
	},
})
export default createEventContract

export type CreateEventContract = typeof createEventContract
