import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const serviceCalendarEventColorsSchema: SpruceSchemas.Appointments.v2021_06_23.ServiceCalendarEventColorsSchema  = {
	id: 'serviceCalendarEventColors',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Background color. This is the color used in the calendar whenever this service is booked. */
	            'backgroundColor': {
	                label: 'Background color',
	                type: 'text',
	                hint: 'This is the color used in the calendar whenever this service is booked.',
	                options: undefined
	            },
	            /** Text color. Make sure this color is readable over the background color! */
	            'foregroundColor': {
	                label: 'Text color',
	                type: 'text',
	                hint: 'Make sure this color is readable over the background color!',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(serviceCalendarEventColorsSchema)

export default serviceCalendarEventColorsSchema
