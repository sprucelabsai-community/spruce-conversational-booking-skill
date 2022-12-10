import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updatePersonCapabilityEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityEmitTarget.schema'
import updatePersonCapabilityEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updatePersonCapabilityEmitPayload.schema'

const updatePersonCapabilityEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitTargetAndPayloadSchema  = {
	id: 'updatePersonCapabilityEmitTargetAndPayload',
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
	                options: {schema: updatePersonCapabilityEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updatePersonCapabilityEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonCapabilityEmitTargetAndPayloadSchema)

export default updatePersonCapabilityEmitTargetAndPayloadSchema
