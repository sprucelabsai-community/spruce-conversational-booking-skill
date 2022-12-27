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
				id: 'updatePersonCapabilityEmitPermissions',
				name: 'update person capability',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-update-people-capability',
						name: 'Can update a people capability',
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
export default updatePersonCapabilityEventContract

export type UpdatePersonCapabilityEventContract =
	typeof updatePersonCapabilityEventContract
