import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listStatusesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listStatusesEmitTargetAndPayload.schema'
import listStatusesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listStatusesResponsePayload.schema'

const listStatusesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-statuses::v2021_06_23': {
			emitPayloadSchema: listStatusesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listStatusesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listStatusesEmitPermissions',
				name: 'List statuses',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-statuses',
						name: 'Can list statuses',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: null,
							owner: null,
							groupManager: null,
							manager: null,
							teammate: null,
							anonymous: null,
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
export default listStatusesEventContract

export type ListStatusesEventContract = typeof listStatusesEventContract
