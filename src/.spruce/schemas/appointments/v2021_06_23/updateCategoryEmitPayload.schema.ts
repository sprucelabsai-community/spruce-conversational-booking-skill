import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateCategoryEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitPayloadSchema  = {
	id: 'updateCategoryEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateCategoryEmitPayloadSchema)

export default updateCategoryEmitPayloadSchema
