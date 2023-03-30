import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createEmitTarget.schema'
import createEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createEmitPayload.schema'

const createEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateEmitTargetAndPayloadSchema  = {
	id: 'createEmitTargetAndPayload',
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
	                options: {schema: createEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createEmitTargetAndPayloadSchema)

export default createEmitTargetAndPayloadSchema
