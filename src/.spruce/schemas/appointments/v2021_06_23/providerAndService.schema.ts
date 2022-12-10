import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const providerAndServiceSchema: SpruceSchemas.Appointments.v2021_06_23.ProviderAndServiceSchema  = {
	id: 'providerAndService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Provider and service',
	    fields: {
	            /** . */
	            'providerId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'serviceId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(providerAndServiceSchema)

export default providerAndServiceSchema
