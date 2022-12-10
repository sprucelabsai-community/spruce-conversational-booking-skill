import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const optionalProvidersAndServicesSchema: SpruceSchemas.Appointments.v2021_06_23.OptionalProvidersAndServicesSchema  = {
	id: 'optionalProvidersAndServices',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'providerId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'serviceId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(optionalProvidersAndServicesSchema)

export default optionalProvidersAndServicesSchema
