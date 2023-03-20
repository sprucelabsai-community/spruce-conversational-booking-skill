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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-hold-time',
						name: 'Can hold time',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: null,
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
export default createHoldEventContract

export type CreateHoldEventContract = typeof createHoldEventContract
