import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAvailabilityForMonthEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailabilityForMonthEmitTargetSchema  = {
	id: 'getAvailabilityForMonthEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAvailabilityForMonthEmitTargetSchema)

export default getAvailabilityForMonthEmitTargetSchema
