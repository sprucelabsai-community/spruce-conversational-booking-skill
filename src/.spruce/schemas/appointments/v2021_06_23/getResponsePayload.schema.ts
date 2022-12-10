import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointment.schema'

const getResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetResponsePayloadSchema  = {
	id: 'getResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointment': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: appointmentSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getResponsePayloadSchema)

export default getResponsePayloadSchema
