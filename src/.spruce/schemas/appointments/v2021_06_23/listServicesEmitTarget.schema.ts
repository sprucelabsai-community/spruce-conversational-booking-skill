import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listServicesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListServicesEmitTargetSchema  = {
	id: 'listServicesEmitTarget',
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
	            'categoryIds': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServicesEmitTargetSchema)

export default listServicesEmitTargetSchema
