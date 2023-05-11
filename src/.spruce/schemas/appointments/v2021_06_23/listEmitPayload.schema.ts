import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListEmitPayloadSchema  = {
	id: 'listEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'afterDateTimeMs': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'beforeDateTimeMs': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'shouldSearchLocationWide': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listEmitPayloadSchema)

export default listEmitPayloadSchema
