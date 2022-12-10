import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listBookedServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listBookedService.schema'

const listBookedServicesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesResponsePayloadSchema  = {
	id: 'listBookedServicesResponsePayload',
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
	                options: {schema: listBookedServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listBookedServicesResponsePayloadSchema)

export default listBookedServicesResponsePayloadSchema
