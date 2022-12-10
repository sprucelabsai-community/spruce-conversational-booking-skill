import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createServiceEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createServiceEmitTarget.schema'
import createServiceEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createServiceEmitPayload.schema'

const createServiceEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitTargetAndPayloadSchema  = {
	id: 'createServiceEmitTargetAndPayload',
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
	                options: {schema: createServiceEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createServiceEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createServiceEmitTargetAndPayloadSchema)

export default createServiceEmitTargetAndPayloadSchema
