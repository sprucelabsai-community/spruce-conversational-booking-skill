import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getCategoryEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getCategoryEmitTargetAndPayload.schema'
import getCategoryResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getCategoryResponsePayload.schema'

const getCategoryEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-category::v2021_06_23': {
			emitPayloadSchema: getCategoryEmitTargetAndPayloadSchema,
			responsePayloadSchema: getCategoryResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.getCategoryEmitPermissions',
				name: 'get category',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-category',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						requireAllStatuses: false,
						defaults: {
							skill: true,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							loggedIn: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default getCategoryEventContract

export type GetCategoryEventContract = typeof getCategoryEventContract
