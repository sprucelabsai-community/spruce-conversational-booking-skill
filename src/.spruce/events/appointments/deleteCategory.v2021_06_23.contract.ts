import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import deleteCategoryEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteCategoryEmitTargetAndPayload.schema'
import deleteCategoryResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/deleteCategoryResponsePayload.schema'

const deleteCategoryEventContract = buildEventContract({
	eventSignatures: {
		'appointments.delete-category::v2021_06_23': {
			emitPayloadSchema: deleteCategoryEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteCategoryResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.deleteCategoryEmitPermissions',
				name: 'delete category',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-delete-category',
						name: 'Can delete category',
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
export default deleteCategoryEventContract

export type DeleteCategoryEventContract = typeof deleteCategoryEventContract
