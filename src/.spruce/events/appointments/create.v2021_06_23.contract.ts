import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createEmitTargetAndPayload.schema'
import createResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createResponsePayload.schema'

const createEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create::v2021_06_23': {
			emitPayloadSchema: createEmitTargetAndPayloadSchema,
			responsePayloadSchema: createResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createEmitPermissions',
				name: 'create',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-appointment',
						name: 'Can create appointment',
						description: 'This is how a teammate books',
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
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default createEventContract

export type CreateEventContract = typeof createEventContract
