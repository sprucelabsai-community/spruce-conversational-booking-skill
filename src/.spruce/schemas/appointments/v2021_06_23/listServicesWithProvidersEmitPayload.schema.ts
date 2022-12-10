import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listServicesWithProvidersEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitPayloadSchema  = {
	id: 'listServicesWithProvidersEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'requestedDateTime': {
	                type: 'number',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServicesWithProvidersEmitPayloadSchema)

export default listServicesWithProvidersEmitPayloadSchema
