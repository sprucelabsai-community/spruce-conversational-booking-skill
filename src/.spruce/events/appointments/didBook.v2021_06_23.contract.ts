import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didBookEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/didBookEmitTargetAndPayload.schema'

const didBookEventContract = buildEventContract({
	eventSignatures: {
		'appointments.did-book::v2021_06_23': {
			listenPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-listen-to-did-book'],
			},
			emitPayloadSchema: didBookEmitTargetAndPayloadSchema,
		},
	},
})
export default didBookEventContract

export type DidBookEventContract = typeof didBookEventContract
