import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listPeopleCapabilitySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listPeopleCapability.schema'

const listPeopleCapabilitiesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesResponsePayloadSchema  = {
	id: 'listPeopleCapabilitiesResponsePayload',
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
	                options: {schema: listPeopleCapabilitySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleCapabilitiesResponsePayloadSchema)

export default listPeopleCapabilitiesResponsePayloadSchema
