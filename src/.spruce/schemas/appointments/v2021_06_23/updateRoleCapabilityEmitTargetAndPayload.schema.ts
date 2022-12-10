import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateRoleCapabilityEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityEmitTarget.schema'
import updateRoleCapabilityEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateRoleCapabilityEmitPayload.schema'

const updateRoleCapabilityEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTargetAndPayloadSchema  = {
	id: 'updateRoleCapabilityEmitTargetAndPayload',
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
	                options: {schema: updateRoleCapabilityEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateRoleCapabilityEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleCapabilityEmitTargetAndPayloadSchema)

export default updateRoleCapabilityEmitTargetAndPayloadSchema
