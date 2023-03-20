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
				id: 'appointments.cancelHoldEmitPermissions',
				name: 'cancel hold',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-cancel-hold',
						name: 'Can cancel hold',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: false,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: null,
							loggedIn: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default cancelHoldEventContract

export type CancelHoldEventContract = typeof cancelHoldEventContract
