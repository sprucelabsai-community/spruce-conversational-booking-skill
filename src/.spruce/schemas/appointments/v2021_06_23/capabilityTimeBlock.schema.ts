import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const capabilityTimeBlockSchema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema  = {
	id: 'capabilityTimeBlock',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Capability time block ',
	    fields: {
	            /** . */
	            'durationMinutes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'title': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'isBusy': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(capabilityTimeBlockSchema)

export default capabilityTimeBlockSchema
