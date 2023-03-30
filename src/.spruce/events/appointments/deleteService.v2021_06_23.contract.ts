import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import deleteServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteServiceEmitTargetAndPayload.schema'
import deleteServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteServiceResponsePayload.schema'

const deleteServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.delete-service::v2021_06_23': {
			emitPayloadSchema: deleteServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.deleteServiceEmitPermissions',
				name: 'Delete Service',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-delete-service',
						name: 'Can delete service',
						description: null,
						requireAllStatuses: null,
						defaults: {
							skill: null,
							owner: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
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
export default deleteServiceEventContract

export type DeleteServiceEventContract = typeof deleteServiceEventContract
