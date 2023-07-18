import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getAvailabilityForMonthEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getAvailabilityForMonthEmitTarget.schema'
import getAvailabilityForMonthEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getAvailabilityForMonthEmitPayload.schema'

const getAvailabilityForMonthEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailabilityForMonthEmitTargetAndPayloadSchema  = {
	id: 'getAvailabilityForMonthEmitTargetAndPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getAvailabilityForMonthEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getAvailabilityForMonthEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailabilityForMonthEmitTargetAndPayloadSchema)

export default getAvailabilityForMonthEmitTargetAndPayloadSchema
