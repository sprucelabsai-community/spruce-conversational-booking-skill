import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateRoleCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityEmitTargetAndPayload.schema'
import updateRoleCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityResponsePayload.schema'

const updateRoleCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-role-capability::v2021_06_23': {
			emitPayloadSchema: updateRoleCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateRoleCapabilityResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateRoleCapabilityEmitPermissions',
				name: 'Update role capability',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-role-capability',
						name: 'Can update a role capability',
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
export default updateRoleCapabilityEventContract

export type UpdateRoleCapabilityEventContract =
	typeof updateRoleCapabilityEventContract
