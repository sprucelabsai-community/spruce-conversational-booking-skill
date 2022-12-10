import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const appointmentStatusTargetSchema: SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusTargetSchema  = {
	id: 'appointmentStatusTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(appointmentStatusTargetSchema)

export default appointmentStatusTargetSchema
