import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import updateEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateEmitTargetAndPayload.schema'
import updateResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateResponsePayload.schema'

const updateEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-update-appointment'],
			},

			emitPayloadSchema: updateEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateResponsePayloadSchema,
		},
	},
})
export default updateEventContract

export type UpdateEventContract = typeof updateEventContract
