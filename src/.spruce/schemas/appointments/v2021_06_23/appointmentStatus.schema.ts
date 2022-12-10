import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentStatusTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointmentStatusTarget.schema'

const appointmentStatusSchema: SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusSchema  = {
	id: 'appointmentStatus',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Appointment status',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'slug': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'order': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: appointmentStatusTargetSchema_v2021_06_23,}
	            },
	            /** Style. */
	            'style': {
	                label: 'Style',
	                type: 'select',
	                options: {choices: [{"value":"draft","label":"Draft"},{"value":"tentative","label":"Tentative"},{"value":"upcoming","label":"Upcoming"},{"value":"unavailable","label":"Unavailable"},{"value":"blocked","label":"Blocked"},{"value":"active","label":"Active"},{"value":"past","label":"Past"},{"value":"warn","label":"Warning"},{"value":"critical","label":"Critical"}],}
	            },
	            /** Icon. */
	            'lineIcon': {
	                label: 'Icon',
	                type: 'select',
	                options: {choices: [{"value":"star","label":"star"},{"value":"alarm","label":"alarm"},{"value":"restricted","label":"restricted"},{"value":"award-badge","label":"award-badge"},{"value":"money-sign","label":"money-sign"},{"value":"star-filled","label":"star-filled"}],}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(appointmentStatusSchema)

export default appointmentStatusSchema
