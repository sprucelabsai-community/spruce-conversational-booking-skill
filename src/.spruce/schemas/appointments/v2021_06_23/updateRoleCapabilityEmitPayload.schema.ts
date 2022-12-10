import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import capabilityTimeBlockSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/capabilityTimeBlock.schema'

const updateRoleCapabilityEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitPayloadSchema  = {
	id: 'updateRoleCapabilityEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'price': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'isEnabled': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'doesOffer': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'timeBlocks': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: capabilityTimeBlockSchema_v2021_06_23,}
	            },
	            /** . */
	            'serviceId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleCapabilityEmitPayloadSchema)

export default updateRoleCapabilityEmitPayloadSchema
