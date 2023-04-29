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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
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
export default syncStatusesEventContract

export type SyncStatusesEventContract = typeof syncStatusesEventContract
