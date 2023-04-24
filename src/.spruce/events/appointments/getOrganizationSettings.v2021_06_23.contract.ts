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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-organization-settings',
						name: 'Can get organization settings',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: false,
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
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default getOrganizationSettingsEventContract

export type GetOrganizationSettingsEventContract =
	typeof getOrganizationSettingsEventContract
