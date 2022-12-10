import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createService.schema'

const createServiceResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateServiceResponsePayloadSchema  = {
	id: 'createServiceResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'service': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createServiceResponsePayloadSchema)

export default createServiceResponsePayloadSchema
