import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import willSendConfirmationEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/willSendConfirmationEmitTargetAndPayload.schema'
import willSendConfirmationResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/willSendConfirmationResponsePayload.schema'

const willSendConfirmationEventContract = buildEventContract({
	eventSignatures: {
		'appointments.will-send-confirmation::v2021_06_23': {
			emitPayloadSchema: willSendConfirmationEmitTargetAndPayloadSchema,
			responsePayloadSchema: willSendConfirmationResponsePayloadSchema,

			listenPermissionContract: buildPermissionContract({
				id: 'appointments.willSendConfirmationListenPermissions',
				name: 'Will send confirmation',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-listen-to-will-send',
						name: 'Can listen to will send',
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
export default willSendConfirmationEventContract

export type WillSendConfirmationEventContract =
	typeof willSendConfirmationEventContract
