import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createPersonCapabilityEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityEmitTargetAndPayload.schema'
import createPersonCapabilityResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityResponsePayload.schema'

const createPersonCapabilityEventContract = buildEventContract({
	eventSignatures: {
		'appointments.create-person-capability::v2021_06_23': {
			emitPayloadSchema: createPersonCapabilityEmitTargetAndPayloadSchema,
			responsePayloadSchema: createPersonCapabilityResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.createPersonCapabilityEmitPermissions',
				name: 'Create person capability',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-create-person-capability',
						name: 'Can create a person capability',
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
export default createPersonCapabilityEventContract

export type CreatePersonCapabilityEventContract =
	typeof createPersonCapabilityEventContract
