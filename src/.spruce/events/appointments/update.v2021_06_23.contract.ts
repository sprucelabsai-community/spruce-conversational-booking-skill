import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateEmitTargetAndPayload.schema'
import updateResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateResponsePayload.schema'

const updateEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update::v2021_06_23': {
			emitPayloadSchema: updateEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateEmitPermissions',
				name: 'update',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-appointment',
						name: 'Can update appointment',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: null,
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
							guest: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
						},
						can: null,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'appointments.updateListenPermissions',
				name: 'update',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						requireAllStatuses: false,
						defaults: {
							skill: false,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
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
export default updateEventContract

export type UpdateEventContract = typeof updateEventContract
