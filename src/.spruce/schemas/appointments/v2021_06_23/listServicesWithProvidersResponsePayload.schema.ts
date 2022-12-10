import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import serviceWithProvidersSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/serviceWithProviders.schema'

const listServicesWithProvidersResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersResponsePayloadSchema  = {
	id: 'listServicesWithProvidersResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'services': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: serviceWithProvidersSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServicesWithProvidersResponsePayloadSchema)

export default listServicesWithProvidersResponsePayloadSchema
