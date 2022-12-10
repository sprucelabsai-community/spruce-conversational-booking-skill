import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createCategoryEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitPayloadSchema  = {
	id: 'createCategoryEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
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

SchemaRegistry.getInstance().trackSchema(createCategoryEmitPayloadSchema)

export default createCategoryEmitPayloadSchema
