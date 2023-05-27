import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getServiceColorsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getServiceColorsEmitTargetAndPayload.schema'
import getServiceColorsResponsePayloadSchema from '#spruce/schemas/appointments/v2021_06_23/getServiceColorsResponsePayload.schema'

const getServiceColorsEventContract = buildEventContract({
	eventSignatures: {
		'appointments.get-service-colors::v2021_06_23': {
			emitPayloadSchema: getServiceColorsEmitTargetAndPayloadSchema,
			responsePayloadSchema: getServiceColorsResponsePayloadSchema,
		},
	},
})
export default getServiceColorsEventContract

export type GetServiceColorsEventContract = typeof getServiceColorsEventContract
