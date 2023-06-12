import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getOrganizationSettingsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getOrganizationSettingsEmitTargetAndPayload.schema'
import getOrganizationSettingsResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getOrganizationSettingsResponsePayload.schema'

const getOrganizationSettingsEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-organization-settings::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.management',
				permissionIdsAny: ['can-get-organization-settings'],
			},

			emitPayloadSchema: getOrganizationSettingsEmitTargetAndPayloadSchema,
			responsePayloadSchema: getOrganizationSettingsResponsePayloadSchema,
		},
	},
})
export default getOrganizationSettingsEventContract

export type GetOrganizationSettingsEventContract =
	typeof getOrganizationSettingsEventContract
