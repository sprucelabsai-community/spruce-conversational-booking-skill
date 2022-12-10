import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerCapabilitiesEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitPayloadSchema  = {
	id: 'registerCapabilitiesEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'year': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'month': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'day': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerCapabilitiesEmitPayloadSchema)

export default registerCapabilitiesEmitPayloadSchema
