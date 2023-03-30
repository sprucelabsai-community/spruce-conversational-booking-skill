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
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-service',
						name: 'Get a service',
						description: 'Will this person be allowed to high five?',
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
export default getServiceEventContract

export type GetServiceEventContract = typeof getServiceEventContract
