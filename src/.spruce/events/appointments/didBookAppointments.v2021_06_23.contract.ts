import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didBookAppointmentsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/didBookAppointmentsEmitTargetAndPayload.schema'

const didBookAppointmentsEventContract = buildEventContract({
	eventSignatures: {
		'appointments.did-book-appointments::v2021_06_23': {
			emitPayloadSchema: didBookAppointmentsEmitTargetAndPayloadSchema,
		},
	},
})
export default didBookAppointmentsEventContract

export type DidBookAppointmentsEventContract =
	typeof didBookAppointmentsEventContract
