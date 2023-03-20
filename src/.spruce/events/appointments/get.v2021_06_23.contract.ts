import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getEmitTargetAndPayload.schema'
import getResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getResponsePayload.schema'

const getEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get::v2021_06_23': {
			emitPayloadSchema: getEmitTargetAndPayloadSchema,
			responsePayloadSchema: getResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.getEmitPermissions',
				name: 'get',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-appointment',
						name: 'Can get apponitment',
						description: null,
						requireAllStatuses: false,
						defaults: {
							skill: true,
							owner: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							groupManager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							manager: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							teammate: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
							anonymous: null,
							loggedIn: null,
							guest: {
								default: true,
								clockedIn: null,
								clockedOut: null,
								onPrem: null,
								offPrem: null,
							},
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default getEventContract

export type GetEventContract = typeof getEventContract
