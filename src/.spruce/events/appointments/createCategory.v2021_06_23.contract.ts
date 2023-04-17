import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createCategoryEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createCategoryEmitTargetAndPayload.schema'
import createCategoryResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createCategoryResponsePayload.schema'

const createCategoryEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-category::v2021_06_23': {
			emitPayloadSchema: createCategoryEmitTargetAndPayloadSchema,
			responsePayloadSchema: createCategoryResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createCategoryEmitPermissions',
				name: 'create category',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-category',
						name: 'Can create category',
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
export default createCategoryEventContract

export type CreateCategoryEventContract = typeof createCategoryEventContract
