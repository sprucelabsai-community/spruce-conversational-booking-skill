import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const appointmentTargetSchema: SpruceSchemas.Appointments.v2021_06_23.AppointmentTargetSchema  = {
	id: 'appointmentTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'guestId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(appointmentTargetSchema)

export default appointmentTargetSchema
