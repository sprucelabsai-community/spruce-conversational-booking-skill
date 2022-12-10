import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateCategoryEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTargetSchema  = {
	id: 'updateCategoryEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'categoryId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateCategoryEmitTargetSchema)

export default updateCategoryEmitTargetSchema
