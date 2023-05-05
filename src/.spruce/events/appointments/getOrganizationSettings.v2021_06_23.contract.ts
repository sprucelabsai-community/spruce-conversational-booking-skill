import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getOrganizationSettingsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getOrganizationSettingsEmitTargetAndPayload.schema'
import getOrganizationSettingsResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getOrganizationSettingsResponsePayload.schema'

const getOrganizationSettingsEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-organization-settings::v2021_06_23': {
			emitPayloadSchema: getOrganizationSettingsEmitTargetAndPayloadSchema,
			responsePayloadSchema: getOrganizationSettingsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.getOrganizationSettingsEmitPermissions',
				name: 'get organization settings',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-organization-settings',
						name: 'Can get organization settings',
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
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default getOrganizationSettingsEventContract

export type GetOrganizationSettingsEventContract =
	typeof getOrganizationSettingsEventContract
