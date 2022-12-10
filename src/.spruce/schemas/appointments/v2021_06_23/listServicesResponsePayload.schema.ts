import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listService.schema'

const listServicesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListServicesResponsePayloadSchema  = {
	id: 'listServicesResponsePayload',
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
	                options: {schema: listServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServicesResponsePayloadSchema)

export default listServicesResponsePayloadSchema
