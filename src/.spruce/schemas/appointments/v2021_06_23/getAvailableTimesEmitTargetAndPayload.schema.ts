import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getAvailableTimesEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getAvailableTimesEmitTarget.schema'
import getAvailableTimesEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getAvailableTimesEmitPayload.schema'

const getAvailableTimesEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTargetAndPayloadSchema  = {
	id: 'getAvailableTimesEmitTargetAndPayload',
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
	                options: {schema: getAvailableTimesEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getAvailableTimesEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailableTimesEmitTargetAndPayloadSchema)

export default getAvailableTimesEmitTargetAndPayloadSchema
