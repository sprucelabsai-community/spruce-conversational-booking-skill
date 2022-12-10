import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createPersonCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createPersonCapability.schema'

const createPersonCapabilityResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityResponsePayloadSchema  = {
	id: 'createPersonCapabilityResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capability': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createPersonCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createPersonCapabilityResponsePayloadSchema)

export default createPersonCapabilityResponsePayloadSchema
