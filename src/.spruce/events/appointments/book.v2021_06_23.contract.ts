import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import bookEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/bookEmitTargetAndPayload.schema'
import bookResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/bookResponsePayload.schema'

const bookEventContract = buildEventContract({
	eventSignatures: {
		'appointments.book::v2021_06_23': {
			emitPayloadSchema: bookEmitTargetAndPayloadSchema,
			responsePayloadSchema: bookResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'bookEmitPermissions',
				name: 'book',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-book-appointment',
						name: 'Can book appointment',
						defaults: {
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default bookEventContract

export type BookEventContract = typeof bookEventContract
