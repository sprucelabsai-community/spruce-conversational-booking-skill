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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-available-times',
						name: 'Can available appointment times',
						description: null,
						requireAllStatuses: false,
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
export default getAvailableTimesEventContract

export type GetAvailableTimesEventContract =
	typeof getAvailableTimesEventContract
