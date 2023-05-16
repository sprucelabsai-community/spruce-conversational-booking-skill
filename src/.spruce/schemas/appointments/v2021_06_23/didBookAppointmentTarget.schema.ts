import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didBookAppointmentTargetSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentTargetSchema  = {
	id: 'didBookAppointmentTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookAppointmentTargetSchema)

export default didBookAppointmentTargetSchema
