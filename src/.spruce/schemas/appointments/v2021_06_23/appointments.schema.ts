import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const appointmentsSchema: SpruceSchemas.Appointments.v2021_06_23.AppointmentsSchema  = {
	id: 'appointments',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'guestId': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(appointmentsSchema)

export default appointmentsSchema
