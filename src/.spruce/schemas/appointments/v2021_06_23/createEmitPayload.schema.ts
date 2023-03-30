import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createAppointmentServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createAppointmentService.schema'

const createEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateEmitPayloadSchema  = {
	id: 'createEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'services': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: createAppointmentServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createEmitPayloadSchema)

export default createEmitPayloadSchema
