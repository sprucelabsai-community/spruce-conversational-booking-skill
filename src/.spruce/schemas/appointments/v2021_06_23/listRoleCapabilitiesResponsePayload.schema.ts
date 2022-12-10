import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listRoleCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listRoleCapability.schema'

const listRoleCapabilitiesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesResponsePayloadSchema  = {
	id: 'listRoleCapabilitiesResponsePayload',
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
	                options: {schema: listRoleCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listRoleCapabilitiesResponsePayloadSchema)

export default listRoleCapabilitiesResponsePayloadSchema
