import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import didBookAppointmentTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didBookAppointmentTarget.schema'

const didBookAppointmentSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentSchema  = {
	id: 'didBookAppointment',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Did book appointment',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'statuses': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didBookAppointmentTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookAppointmentSchema)

export default didBookAppointmentSchema
