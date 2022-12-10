import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteCategoryResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryResponsePayloadSchema  = {
	id: 'deleteCategoryResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'totalDeleted': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteCategoryResponsePayloadSchema)

export default deleteCategoryResponsePayloadSchema
