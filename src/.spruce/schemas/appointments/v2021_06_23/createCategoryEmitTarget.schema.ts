import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createCategoryEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitTargetSchema  = {
	id: 'createCategoryEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(createCategoryEmitTargetSchema)

export default createCategoryEmitTargetSchema
