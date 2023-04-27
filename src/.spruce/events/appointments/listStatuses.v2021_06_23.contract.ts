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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-statuses',
						name: 'Can list statuses',
						defaults: {
							loggedIn: {
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
export default listStatusesEventContract

export type ListStatusesEventContract = typeof listStatusesEventContract
