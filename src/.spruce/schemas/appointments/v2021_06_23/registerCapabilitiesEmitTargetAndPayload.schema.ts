import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import registerCapabilitiesEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesEmitTarget.schema'
import registerCapabilitiesEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesEmitPayload.schema'

const registerCapabilitiesEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitTargetAndPayloadSchema  = {
	id: 'registerCapabilitiesEmitTargetAndPayload',
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
	                options: {schema: registerCapabilitiesEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerCapabilitiesEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerCapabilitiesEmitTargetAndPayloadSchema)

export default registerCapabilitiesEmitTargetAndPayloadSchema
