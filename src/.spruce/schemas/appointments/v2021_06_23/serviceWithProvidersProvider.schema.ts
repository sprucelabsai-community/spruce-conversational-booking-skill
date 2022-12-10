import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import capabilityTimeBlockSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/capabilityTimeBlock.schema'

const serviceWithProvidersProviderSchema: SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersProviderSchema  = {
	id: 'serviceWithProvidersProvider',
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
	            /** . */
	            'price': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'durationMinutes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'casualName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Avatar src. */
	            'avatar': {
	                label: 'Avatar src',
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	            /** . */
	            'timeBlocks': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: capabilityTimeBlockSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(serviceWithProvidersProviderSchema)

export default serviceWithProvidersProviderSchema
