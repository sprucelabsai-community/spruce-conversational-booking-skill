import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import bookEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/bookEmitTarget.schema'

const bookEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.BookEmitTargetAndPayloadSchema  = {
	id: 'bookEmitTargetAndPayload',
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
	                options: {schema: bookEmitTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(bookEmitTargetAndPayloadSchema)

export default bookEmitTargetAndPayloadSchema
