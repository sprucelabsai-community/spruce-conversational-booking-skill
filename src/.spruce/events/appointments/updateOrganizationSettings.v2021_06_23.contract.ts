import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateOrganizationSettingsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateOrganizationSettingsEmitTargetAndPayload.schema'
import updateOrganizationSettingsResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateOrganizationSettingsResponsePayload.schema'

const updateOrganizationSettingsEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-organization-settings::v2021_06_23': {
			emitPayloadSchema: updateOrganizationSettingsEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateOrganizationSettingsResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateOrganizationSettingsEmitPermissions',
				name: 'update organization settings',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-save-org-settings',
						name: 'Can save org settings',
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
export default updateOrganizationSettingsEventContract

export type UpdateOrganizationSettingsEventContract =
	typeof updateOrganizationSettingsEventContract
