import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import updateCategoryEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateCategoryEmitTargetAndPayload.schema'
import updateCategoryResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/updateCategoryResponsePayload.schema'

const updateCategoryEventContract = buildEventContract({
	eventSignatures: {
		'appointments.update-category::v2021_06_23': {
			emitPayloadSchema: updateCategoryEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateCategoryResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.updateCategoryEmitPermissions',
				name: 'edit category',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-edit-category',
						name: 'Can edit category',
						defaults: {
							loggedIn: {
								default: true,
							},
							anonymous: {
								default: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default updateCategoryEventContract

export type UpdateCategoryEventContract = typeof updateCategoryEventContract
