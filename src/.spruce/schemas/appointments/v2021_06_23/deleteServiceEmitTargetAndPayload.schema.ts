import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import deleteServiceEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/deleteServiceEmitTarget.schema'

const deleteServiceEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTargetAndPayloadSchema  = {
	id: 'deleteServiceEmitTargetAndPayload',
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
	                options: {schema: deleteServiceEmitTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteServiceEmitTargetAndPayloadSchema)

export default deleteServiceEmitTargetAndPayloadSchema
