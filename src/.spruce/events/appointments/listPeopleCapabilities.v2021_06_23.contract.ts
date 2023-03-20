import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listPeopleCapabilitiesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listPeopleCapabilitiesEmitTargetAndPayload.schema'
import listPeopleCapabilitiesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listPeopleCapabilitiesResponsePayload.schema'

const listPeopleCapabilitiesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-people-capabilities::v2021_06_23': {
			emitPayloadSchema: listPeopleCapabilitiesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listPeopleCapabilitiesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listPeopleCapabilitiesEmitPermissions',
				name: 'list people capabilities',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-people-capabilities',
						name: 'Can list people capabilities',
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
export default listPeopleCapabilitiesEventContract

export type ListPeopleCapabilitiesEventContract =
	typeof listPeopleCapabilitiesEventContract
