import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getAvailabilityForMonthEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getAvailabilityForMonthEmitTargetAndPayload.schema'
import getAvailabilityForMonthResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getAvailabilityForMonthResponsePayload.schema'

const getAvailabilityForMonthEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-availability-for-month::v2021_06_23': {
			emitPermissions: {
				contractId: 'appointments.appointments',
				permissionIdsAny: ['can-get-monthly-aviability'],
			},

			emitPayloadSchema: getAvailabilityForMonthEmitTargetAndPayloadSchema,
			responsePayloadSchema: getAvailabilityForMonthResponsePayloadSchema,
		},
	},
})
export default getAvailabilityForMonthEventContract

export type GetAvailabilityForMonthEventContract =
	typeof getAvailabilityForMonthEventContract
