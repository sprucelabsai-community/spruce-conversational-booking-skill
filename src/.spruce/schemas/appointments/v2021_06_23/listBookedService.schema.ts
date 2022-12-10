import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listBookedServiceSchema: SpruceSchemas.Appointments.v2021_06_23.ListBookedServiceSchema  = {
	id: 'listBookedService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listBookedServiceSchema)

export default listBookedServiceSchema
