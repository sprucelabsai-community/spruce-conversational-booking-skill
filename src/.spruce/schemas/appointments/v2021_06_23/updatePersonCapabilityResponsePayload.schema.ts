import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updatePersonCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapability.schema'

const updatePersonCapabilityResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityResponsePayloadSchema  = {
	id: 'updatePersonCapabilityResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capability': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updatePersonCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonCapabilityResponsePayloadSchema)

export default updatePersonCapabilityResponsePayloadSchema
