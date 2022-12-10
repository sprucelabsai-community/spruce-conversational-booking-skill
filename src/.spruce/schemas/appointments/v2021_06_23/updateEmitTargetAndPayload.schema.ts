import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateEmitTarget.schema'
import updateEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateEmitPayload.schema'

const updateEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTargetAndPayloadSchema  = {
	id: 'updateEmitTargetAndPayload',
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
	                options: {schema: updateEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateEmitTargetAndPayloadSchema)

export default updateEmitTargetAndPayloadSchema
