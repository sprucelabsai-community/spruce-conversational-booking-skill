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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-people-capabilities',
						name: 'Can list people capabilities',
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
export default listPeopleCapabilitiesEventContract

export type ListPeopleCapabilitiesEventContract =
	typeof listPeopleCapabilitiesEventContract
