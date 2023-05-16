import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import didBookAppointmentSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/didBookAppointment.schema'

const didBookEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookEmitPayloadSchema  = {
	id: 'didBookEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointment': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didBookAppointmentSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookEmitPayloadSchema)

export default didBookEmitPayloadSchema
