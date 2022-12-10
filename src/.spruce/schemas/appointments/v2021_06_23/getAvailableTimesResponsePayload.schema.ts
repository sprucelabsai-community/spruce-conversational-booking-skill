import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import availabilityTimeslotSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/availabilityTimeslot.schema'

const getAvailableTimesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesResponsePayloadSchema  = {
	id: 'getAvailableTimesResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'availableTimes': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: availabilityTimeslotSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailableTimesResponsePayloadSchema)

export default getAvailableTimesResponsePayloadSchema
