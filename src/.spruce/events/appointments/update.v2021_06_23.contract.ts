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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-appointment',
						name: 'Can update appointment',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								default: true,
							},
							manager: {
								default: true,
							},
							teammate: {
								default: true,
							},
							guest: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'appointments.updateListenPermissions',
				name: 'update',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						defaults: {
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default updateEventContract

export type UpdateEventContract = typeof updateEventContract
