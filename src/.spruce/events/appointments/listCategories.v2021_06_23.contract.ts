import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listCategoriesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listCategoriesEmitTargetAndPayload.schema'
import listCategoriesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listCategoriesResponsePayload.schema'

const listCategoriesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-categories::v2021_06_23': {
			emitPayloadSchema: listCategoriesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listCategoriesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listCategoriesEmitPermissions',
				name: 'list categories',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-categories',
						name: 'Can list categories',
						description: null,
						requireAllStatuses: null,
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
export default listCategoriesEventContract

export type ListCategoriesEventContract = typeof listCategoriesEventContract
