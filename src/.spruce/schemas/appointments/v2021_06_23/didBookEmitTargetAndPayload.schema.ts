import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import didBookEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didBookEmitTarget.schema'
import didBookEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didBookEmitPayload.schema'

const didBookEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookEmitTargetAndPayloadSchema  = {
	id: 'didBookEmitTargetAndPayload',
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
	                options: {schema: didBookEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didBookEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookEmitTargetAndPayloadSchema)

export default didBookEmitTargetAndPayloadSchema
