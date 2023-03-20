import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listBookedServicesEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listBookedServicesEmitTargetAndPayload.schema'
import listBookedServicesResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/listBookedServicesResponsePayload.schema'

const listBookedServicesEventContract = buildEventContract({
	eventSignatures: {
		'appointments.list-booked-services::v2021_06_23': {
			emitPayloadSchema: listBookedServicesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listBookedServicesResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'appointments.listBookedServicesEmitPermissions',
				name: 'list booked services',
				description: null,
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-list-booked-services',
						name: 'Can list booked services',
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
							guest: null,
						},
						can: null,
					},
				],
			}),
		},
	},
})
export default listBookedServicesEventContract

export type ListBookedServicesEventContract =
	typeof listBookedServicesEventContract
