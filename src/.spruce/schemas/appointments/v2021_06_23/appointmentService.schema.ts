import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentServiceTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointmentServiceTarget.schema'

const appointmentServiceSchema: SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceSchema  = {
	id: 'appointmentService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Appointment service',
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
	            'dateDeleted': {
	                type: 'dateTime',
	                isPrivate: true,
	                options: undefined
	            },
	            /** . */
	            'providerId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'guestId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'providerCasualName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'durationMinutes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'startDateTimeMs': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'price': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'serviceName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: appointmentServiceTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(appointmentServiceSchema)

export default appointmentServiceSchema
