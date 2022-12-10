import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getServiceServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getServiceService.schema'

const updateServiceResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceResponsePayloadSchema  = {
	id: 'updateServiceResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'service': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getServiceServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateServiceResponsePayloadSchema)

export default updateServiceResponsePayloadSchema
