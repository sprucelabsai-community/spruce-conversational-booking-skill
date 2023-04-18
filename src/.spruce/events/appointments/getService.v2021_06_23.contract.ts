import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import getServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getServiceEmitTargetAndPayload.schema'
import getServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getServiceResponsePayload.schema'

const getServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-service::v2021_06_23': {
			emitPayloadSchema: getServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: getServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.getServiceEmitPermissions',
				name: 'get service',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-service',
						name: 'Get a service',
						description: 'Will this person be allowed to high five?',
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
export default getServiceEventContract

export type GetServiceEventContract = typeof getServiceEventContract
