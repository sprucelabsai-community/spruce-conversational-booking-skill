import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listRoleCapabilitiesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listRoleCapabilitiesEmitTargetAndPayload.schema'
import listRoleCapabilitiesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listRoleCapabilitiesResponsePayload.schema'

const listRoleCapabilitiesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-role-capabilities::v2021_06_23': {
			emitPayloadSchema: listRoleCapabilitiesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listRoleCapabilitiesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listRoleCapabilitiesEmitPermissions',
				name: 'list role capabilities',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-role-capabilities',
						name: 'Can list role capabilities',
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
export default listRoleCapabilitiesEventContract

export type ListRoleCapabilitiesEventContract =
	typeof listRoleCapabilitiesEventContract
