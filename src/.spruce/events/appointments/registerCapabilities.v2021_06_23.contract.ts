import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import registerCapabilitiesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesEmitTargetAndPayload.schema'
import registerCapabilitiesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesResponsePayload.schema'

const registerCapabilitiesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.register-capabilities::v2021_06_23': {
			emitPayloadSchema: registerCapabilitiesEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerCapabilitiesResponsePayloadSchema,

			listenPermissionContract: buildPermissionContract({
				id: 'appointments.registerCapabilitiesListenPermissions',
				name: 'register capabilities',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-register-capabilities',
						name: 'Can register capabilities',
						defaults: {
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default registerCapabilitiesEventContract

export type RegisterCapabilitiesEventContract =
	typeof registerCapabilitiesEventContract
