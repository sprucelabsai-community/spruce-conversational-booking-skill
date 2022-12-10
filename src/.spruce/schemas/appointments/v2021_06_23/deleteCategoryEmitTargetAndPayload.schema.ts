import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import deleteCategoryEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/deleteCategoryEmitTarget.schema'

const deleteCategoryEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryEmitTargetAndPayloadSchema  = {
	id: 'deleteCategoryEmitTargetAndPayload',
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
	                options: {schema: deleteCategoryEmitTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteCategoryEmitTargetAndPayloadSchema)

export default deleteCategoryEmitTargetAndPayloadSchema
