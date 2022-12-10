import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import createRoleCapabilityEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityEmitTarget.schema'
import createRoleCapabilityEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createRoleCapabilityEmitPayload.schema'

const createRoleCapabilityEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTargetAndPayloadSchema  = {
	id: 'createRoleCapabilityEmitTargetAndPayload',
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
	                options: {schema: createRoleCapabilityEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createRoleCapabilityEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createRoleCapabilityEmitTargetAndPayloadSchema)

export default createRoleCapabilityEmitTargetAndPayloadSchema
