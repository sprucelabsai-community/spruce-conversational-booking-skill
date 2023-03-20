import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createRoleCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityEmitTargetAndPayload.schema'
import createRoleCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityResponsePayload.schema'

const createRoleCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-role-capability::v2021_06_23': {
			emitPayloadSchema: createRoleCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: createRoleCapabilityResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createRoleCapabilityEmitPermissions',
				name: 'Create Role Capability',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-role-capability',
						name: 'Can create a role capability',
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
export default createRoleCapabilityEventContract

export type CreateRoleCapabilityEventContract =
	typeof createRoleCapabilityEventContract
