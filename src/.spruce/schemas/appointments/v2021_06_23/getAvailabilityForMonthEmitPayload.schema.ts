import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import optionalProvidersAndServicesSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/optionalProvidersAndServices.schema'

const getAvailabilityForMonthEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailabilityForMonthEmitPayloadSchema  = {
	id: 'getAvailabilityForMonthEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'year': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'month': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'providersAndServices': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: optionalProvidersAndServicesSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailabilityForMonthEmitPayloadSchema)

export default getAvailabilityForMonthEmitPayloadSchema
