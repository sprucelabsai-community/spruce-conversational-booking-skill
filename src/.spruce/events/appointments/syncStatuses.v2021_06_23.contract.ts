import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import syncStatusesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/syncStatusesEmitTargetAndPayload.schema'
import syncStatusesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/syncStatusesResponsePayload.schema'

const syncStatusesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.sync-statuses::v2021_06_23': {
			emitPayloadSchema: syncStatusesEmitTargetAndPayloadSchema,
			responsePayloadSchema: syncStatusesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.syncStatusesEmitPermissions',
				name: 'sync statuses',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
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
export default syncStatusesEventContract

export type SyncStatusesEventContract = typeof syncStatusesEventContract
