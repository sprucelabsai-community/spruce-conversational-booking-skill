import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import serviceWithProvidersProviderSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/serviceWithProvidersProvider.schema'

const serviceWithProvidersSchema: SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersSchema  = {
	id: 'serviceWithProviders',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Service with provider',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'name': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'description': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'minPrice': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'maxPrice': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'minDurationMinutes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'maxDurationMinutes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'icon': {
	                type: 'image',
	                options: undefined
	            },
	            /** . */
	            'providers': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: serviceWithProvidersProviderSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(serviceWithProvidersSchema)

export default serviceWithProvidersSchema
