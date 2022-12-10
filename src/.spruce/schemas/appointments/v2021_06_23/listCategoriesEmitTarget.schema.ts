import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listCategoriesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListCategoriesEmitTargetSchema  = {
	id: 'listCategoriesEmitTarget',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(listCategoriesEmitTargetSchema)

export default listCategoriesEmitTargetSchema
