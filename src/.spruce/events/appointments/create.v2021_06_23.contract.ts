import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createEmitTargetAndPayload.schema'
import createResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createResponsePayload.schema'

const createEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create::v2021_06_23': {
			emitPayloadSchema: createEmitTargetAndPayloadSchema,
			responsePayloadSchema: createResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'createEmitPermissions',
				name: 'create',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-appointment',
						name: 'Can create appointment',
						description: 'This is how a teammate books',
						requireAllStatuses: false,
						defaults: {
							skill: false,
							owner: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							groupManager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							manager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							teammate: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							anonymous: null,
							loggedIn: null,
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default createEventContract

export type CreateEventContract = typeof createEventContract
