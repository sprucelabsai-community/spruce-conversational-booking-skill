import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import capabilityTimeBlockSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/capabilityTimeBlock.schema'
import roleCapabilityEventTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/roleCapabilityEventTarget.schema'

const registerCapabilitiesCapabilitySchema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesCapabilitySchema  = {
	id: 'registerCapabilitiesCapability',
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
	            /** . */
	            'target': {
	                type: 'schema',
	                isPrivate: true,
	                isRequired: true,
	                options: {schema: roleCapabilityEventTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerCapabilitiesCapabilitySchema)

export default registerCapabilitiesCapabilitySchema
