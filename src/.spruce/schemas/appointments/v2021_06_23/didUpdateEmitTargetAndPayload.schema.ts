import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import didUpdateEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didUpdateEmitTarget.schema'
import didUpdateEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didUpdateEmitPayload.schema'

const didUpdateEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DidUpdateEmitTargetAndPayloadSchema  = {
	id: 'didUpdateEmitTargetAndPayload',
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
	                options: {schema: didUpdateEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didUpdateEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didUpdateEmitTargetAndPayloadSchema)

export default didUpdateEmitTargetAndPayloadSchema
