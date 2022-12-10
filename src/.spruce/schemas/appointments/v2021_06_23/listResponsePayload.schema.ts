import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listAppointmentSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listAppointment.schema'

const listResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListResponsePayloadSchema  = {
	id: 'listResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointments': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listAppointmentSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listResponsePayloadSchema)

export default listResponsePayloadSchema
