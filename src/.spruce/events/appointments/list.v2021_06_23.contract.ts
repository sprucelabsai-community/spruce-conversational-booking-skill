import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import listEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listEmitTargetAndPayload.schema'
import listResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listResponsePayload.schema'

const listEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-list-appointments'],
			},

			emitPayloadSchema: listEmitTargetAndPayloadSchema,
			responsePayloadSchema: listResponsePayloadSchema,
		},
	},
})
export default listEventContract

export type ListEventContract = typeof listEventContract
