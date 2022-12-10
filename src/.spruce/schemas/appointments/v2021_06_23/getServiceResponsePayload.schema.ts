import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getService.schema'

const getServiceResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetServiceResponsePayloadSchema  = {
	id: 'getServiceResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'service': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getServiceResponsePayloadSchema)

export default getServiceResponsePayloadSchema
