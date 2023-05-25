import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const serviceCalendarEventColorsSchema: SpruceSchemas.Appointments.v2021_06_23.ServiceCalendarEventColorsSchema  = {
	id: 'serviceCalendarEventColors',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Event color. This is the color that the event will be in your color! */
	            'backgroundColor': {
	                label: 'Event color',
	                type: 'text',
	                hint: 'This is the color that the event will be in your color!',
	                options: undefined
	            },
	            /** Text color. Make sure this color is readable on the background color! */
	            'foregroundColor': {
	                label: 'Text color',
	                type: 'text',
	                hint: 'Make sure this color is readable on the background color!',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(serviceCalendarEventColorsSchema)

export default serviceCalendarEventColorsSchema
