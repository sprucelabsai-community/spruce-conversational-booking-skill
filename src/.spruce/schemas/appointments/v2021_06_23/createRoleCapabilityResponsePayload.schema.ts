import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createRoleCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createRoleCapability.schema'

const createRoleCapabilityResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityResponsePayloadSchema  = {
	id: 'createRoleCapabilityResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capability': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createRoleCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createRoleCapabilityResponsePayloadSchema)

export default createRoleCapabilityResponsePayloadSchema
