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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-role-capabilities',
						name: 'Can list role capabilities',
						defaults: {
							owner: {
								default: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default listRoleCapabilitiesEventContract

export type ListRoleCapabilitiesEventContract =
	typeof listRoleCapabilitiesEventContract
