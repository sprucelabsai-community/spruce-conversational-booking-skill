import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createPersonCapabilityEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityEmitTarget.schema'
import createPersonCapabilityEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createPersonCapabilityEmitPayload.schema'

const createPersonCapabilityEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTargetAndPayloadSchema  = {
	id: 'createPersonCapabilityEmitTargetAndPayload',
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
	                options: {schema: createPersonCapabilityEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createPersonCapabilityEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createPersonCapabilityEmitTargetAndPayloadSchema)

export default createPersonCapabilityEmitTargetAndPayloadSchema
