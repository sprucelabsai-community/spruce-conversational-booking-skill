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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-appointments',
						name: 'Can list appointments',
						defaults: {
							loggedIn: {
								default: true,
							},
							skill: true,
						},
					},
				],
			}),
		},
	},
})
export default listEventContract

export type ListEventContract = typeof listEventContract
