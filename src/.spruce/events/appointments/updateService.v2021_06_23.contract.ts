import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateServiceEmitTargetAndPayload.schema'
import updateServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateServiceResponsePayload.schema'

const updateServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-service::v2021_06_23': {
			emitPayloadSchema: updateServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateServiceEmitPermissions',
				name: 'edit service',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-edit-service',
						name: 'Can edit service',
						description: null,
						requireAllStatuses: null,
						defaults: {
							skill: null,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
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
export default updateServiceEventContract

export type UpdateServiceEventContract = typeof updateServiceEventContract
