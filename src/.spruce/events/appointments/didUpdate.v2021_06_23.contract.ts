import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didUpdateEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/didUpdateEmitTargetAndPayload.schema'

const didUpdateEventContract = buildEventContract({
	eventSignatures: {
		'appointments.did-update::v2021_06_23': {
			listenPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-listen-to-did-book'],
			},
			emitPayloadSchema: didUpdateEmitTargetAndPayloadSchema,
		},
	},
})
export default didUpdateEventContract

export type DidUpdateEventContract = typeof didUpdateEventContract
