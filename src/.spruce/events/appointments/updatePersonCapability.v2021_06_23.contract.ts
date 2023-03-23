import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updatePersonCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityEmitTargetAndPayload.schema'
import updatePersonCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityResponsePayload.schema'

const updatePersonCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-person-capability::v2021_06_23': {
			emitPayloadSchema: updatePersonCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: updatePersonCapabilityResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updatePersonCapabilityEmitPermissions',
				name: 'update person capability',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-people-capability',
						name: 'Can update a people capability',
						defaults: {
							owner: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default updatePersonCapabilityEventContract

export type UpdatePersonCapabilityEventContract =
	typeof updatePersonCapabilityEventContract
