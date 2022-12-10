import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import appointmentStatusSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/appointmentStatus.schema'

const listStatusesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListStatusesResponsePayloadSchema  = {
	id: 'listStatusesResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'statuses': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: appointmentStatusSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listStatusesResponsePayloadSchema)

export default listStatusesResponsePayloadSchema
