import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerCapabilitiesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesEmitTargetAndPayload.schema'
import registerCapabilitiesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesResponsePayload.schema'

const registerCapabilitiesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.register-capabilities::v2021_06_23': {
			listenPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-register-capabilities'],
			},
			emitPayloadSchema: registerCapabilitiesEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerCapabilitiesResponsePayloadSchema,
		},
	},
})
export default registerCapabilitiesEventContract

export type RegisterCapabilitiesEventContract =
	typeof registerCapabilitiesEventContract
