import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getAvailableTimesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getAvailableTimesEmitTargetAndPayload.schema'
import getAvailableTimesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getAvailableTimesResponsePayload.schema'

const getAvailableTimesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-available-times::v2021_06_23': {
			emitPayloadSchema: getAvailableTimesEmitTargetAndPayloadSchema,
			responsePayloadSchema: getAvailableTimesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.getAvailableTimesEmitPermissions',
				name: 'get available times',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-available-times',
						name: 'Can available appointment times',
						defaults: {
							loggedIn: {
								default: true,
							},
							anonymous: {
								default: true,
							},
							skill: true,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default getAvailableTimesEventContract

export type GetAvailableTimesEventContract =
	typeof getAvailableTimesEventContract
