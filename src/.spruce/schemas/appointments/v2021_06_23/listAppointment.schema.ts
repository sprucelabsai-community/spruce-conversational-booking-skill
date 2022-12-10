import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointmentTarget.schema'
import appointmentServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointmentService.schema'

const listAppointmentSchema: SpruceSchemas.Appointments.v2021_06_23.ListAppointmentSchema  = {
	id: 'listAppointment',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: appointmentTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'isCancelled': {
	                type: 'boolean',
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
	            'services': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: appointmentServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listAppointmentSchema)

export default listAppointmentSchema
