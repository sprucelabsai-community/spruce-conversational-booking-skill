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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-category',
						name: 'Can create category',
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
export default createCategoryEventContract

export type CreateCategoryEventContract = typeof createCategoryEventContract
