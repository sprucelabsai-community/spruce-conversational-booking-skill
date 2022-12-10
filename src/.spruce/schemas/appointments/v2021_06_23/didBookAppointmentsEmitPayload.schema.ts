import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentsSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointments.schema'

const didBookAppointmentsEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayloadSchema  = {
	id: 'didBookAppointmentsEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointments': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: appointmentsSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookAppointmentsEmitPayloadSchema)

export default didBookAppointmentsEmitPayloadSchema
