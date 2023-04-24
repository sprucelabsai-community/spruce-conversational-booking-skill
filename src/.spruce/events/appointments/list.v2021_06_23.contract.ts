import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listEmitTargetAndPayload.schema'
import listResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listResponsePayload.schema'

const listEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list::v2021_06_23': {
			emitPayloadSchema: listEmitTargetAndPayloadSchema,
			responsePayloadSchema: listResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listEmitPermissions',
				name: 'list appointments',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-appointments',
						name: 'Can list appointments',
						description: null,
						requireAllStatuses: null,
						defaults: {
							skill: true,
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
export default listEventContract

export type ListEventContract = typeof listEventContract
