import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateCategoryEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateCategoryEmitTarget.schema'
import updateCategoryEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateCategoryEmitPayload.schema'

const updateCategoryEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTargetAndPayloadSchema  = {
	id: 'updateCategoryEmitTargetAndPayload',
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
	                options: {schema: updateCategoryEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateCategoryEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateCategoryEmitTargetAndPayloadSchema)

export default updateCategoryEmitTargetAndPayloadSchema
