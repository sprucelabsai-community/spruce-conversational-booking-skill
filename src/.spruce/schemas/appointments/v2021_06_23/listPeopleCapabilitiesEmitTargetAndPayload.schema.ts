import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import listPeopleCapabilitiesEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listPeopleCapabilitiesEmitTarget.schema'

const listPeopleCapabilitiesEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesEmitTargetAndPayloadSchema  = {
	id: 'listPeopleCapabilitiesEmitTargetAndPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: listPeopleCapabilitiesEmitTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleCapabilitiesEmitTargetAndPayloadSchema)

export default listPeopleCapabilitiesEmitTargetAndPayloadSchema
