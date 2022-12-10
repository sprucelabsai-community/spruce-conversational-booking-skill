import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registerCapabilitiesCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/registerCapabilitiesCapability.schema'

const registerCapabilitiesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesResponsePayloadSchema  = {
	id: 'registerCapabilitiesResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capabilities': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: registerCapabilitiesCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerCapabilitiesResponsePayloadSchema)

export default registerCapabilitiesResponsePayloadSchema
