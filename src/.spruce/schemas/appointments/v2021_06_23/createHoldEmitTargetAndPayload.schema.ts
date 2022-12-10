import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createHoldEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createHoldEmitTarget.schema'
import createHoldEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createHoldEmitPayload.schema'

const createHoldEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTargetAndPayloadSchema  = {
	id: 'createHoldEmitTargetAndPayload',
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
	                options: {schema: createHoldEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createHoldEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createHoldEmitTargetAndPayloadSchema)

export default createHoldEmitTargetAndPayloadSchema
