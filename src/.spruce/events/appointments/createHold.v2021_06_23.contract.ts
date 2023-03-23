import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createHoldEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createHoldEmitTargetAndPayload.schema'
import createHoldResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createHoldResponsePayload.schema'

const createHoldEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-hold::v2021_06_23': {
			emitPayloadSchema: createHoldEmitTargetAndPayloadSchema,
			responsePayloadSchema: createHoldResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createHoldEmitPermissions',
				name: 'create hold',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-hold-time',
						name: 'Can hold time',
						defaults: {
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default createHoldEventContract

export type CreateHoldEventContract = typeof createHoldEventContract
