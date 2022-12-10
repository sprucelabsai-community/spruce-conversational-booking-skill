import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateServiceEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateServiceEmitTarget.schema'
import updateServiceEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateServiceEmitPayload.schema'

const updateServiceEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTargetAndPayloadSchema  = {
	id: 'updateServiceEmitTargetAndPayload',
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
	                options: {schema: updateServiceEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateServiceEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateServiceEmitTargetAndPayloadSchema)

export default updateServiceEmitTargetAndPayloadSchema
