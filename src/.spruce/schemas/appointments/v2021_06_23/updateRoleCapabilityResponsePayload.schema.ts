import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateRoleCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapability.schema'

const updateRoleCapabilityResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityResponsePayloadSchema  = {
	id: 'updateRoleCapabilityResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capability': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateRoleCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleCapabilityResponsePayloadSchema)

export default updateRoleCapabilityResponsePayloadSchema
