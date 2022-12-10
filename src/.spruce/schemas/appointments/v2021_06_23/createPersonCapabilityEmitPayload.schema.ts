import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import capabilityTimeBlockSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/capabilityTimeBlock.schema'

const createPersonCapabilityEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitPayloadSchema  = {
	id: 'createPersonCapabilityEmitPayload',
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
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'doesOffer': {
	                type: 'boolean',
	                isRequired: true,
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
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createPersonCapabilityEmitPayloadSchema)

export default createPersonCapabilityEmitPayloadSchema
