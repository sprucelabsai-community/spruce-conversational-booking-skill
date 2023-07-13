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
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-appointment',
						name: 'Can get apponitment',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								default: true,
							},
							manager: {
								default: true,
							},
							teammate: {
								default: true,
							},
							guest: {
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
export default getEventContract

export type GetEventContract = typeof getEventContract
