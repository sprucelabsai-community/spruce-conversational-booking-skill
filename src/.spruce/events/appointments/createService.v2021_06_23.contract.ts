import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createServiceEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createServiceEmitTargetAndPayload.schema'
import createServiceResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createServiceResponsePayload.schema'

const createServiceEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-service::v2021_06_23': {
			emitPayloadSchema: createServiceEmitTargetAndPayloadSchema,
			responsePayloadSchema: createServiceResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createServiceEmitPermissions',
				name: 'Create Service',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-service',
						name: 'Can create service',
						description: null,
						requireAllStatuses: null,
						defaults: {
							skill: null,
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
export default createServiceEventContract

export type CreateServiceEventContract = typeof createServiceEventContract
