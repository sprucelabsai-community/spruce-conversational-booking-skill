import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import cancelHoldEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/cancelHoldEmitTargetAndPayload.schema'
import cancelHoldResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/cancelHoldResponsePayload.schema'

const cancelHoldEventContract = buildEventContract({
	eventSignatures: {
		'appointments.cancel-hold::v2021_06_23': {
			emitPayloadSchema: cancelHoldEmitTargetAndPayloadSchema,
			responsePayloadSchema: cancelHoldResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'cancelHoldEmitPermissions',
				name: 'cancel hold',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-cancel-hold',
						name: 'Can cancel hold',
						defaults: {
							loggedIn: {
								default: true,
							},
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default cancelHoldEventContract

export type CancelHoldEventContract = typeof cancelHoldEventContract
