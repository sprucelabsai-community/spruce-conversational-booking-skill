import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAvailabilityForMonthResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailabilityForMonthResponsePayloadSchema  = {
	id: 'getAvailabilityForMonthResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'daysOfMonth': {
	                type: 'boolean',
	                isRequired: true,
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailabilityForMonthResponsePayloadSchema)

export default getAvailabilityForMonthResponsePayloadSchema
