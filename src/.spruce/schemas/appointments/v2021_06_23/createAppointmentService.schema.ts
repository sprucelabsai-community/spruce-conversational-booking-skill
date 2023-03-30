import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createAppointmentServiceSchema: SpruceSchemas.Appointments.v2021_06_23.CreateAppointmentServiceSchema  = {
	id: 'createAppointmentService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'dateTimeMs': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'serviceId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'providerId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'calendarEventId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createAppointmentServiceSchema)

export default createAppointmentServiceSchema
