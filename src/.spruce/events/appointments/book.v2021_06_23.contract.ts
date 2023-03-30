import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import bookEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/bookEmitTargetAndPayload.schema'
import bookResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/bookResponsePayload.schema'

const bookEventContract = buildEventContract({
	eventSignatures: {
		'appointments.book::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-book-appointment'],
			},

			emitPayloadSchema: bookEmitTargetAndPayloadSchema,
			responsePayloadSchema: bookResponsePayloadSchema,
		},
	},
})
export default bookEventContract

export type BookEventContract = typeof bookEventContract
