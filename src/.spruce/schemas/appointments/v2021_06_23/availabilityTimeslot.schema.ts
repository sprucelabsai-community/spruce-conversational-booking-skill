import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const availabilityTimeslotSchema: SpruceSchemas.Appointments.v2021_06_23.AvailabilityTimeslotSchema  = {
	id: 'availabilityTimeslot',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: 'Availability Timeslot',
	    fields: {
	            /** . */
	            'dateTimeMs': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'providerIdCombos': {
	                type: 'raw',
	                isRequired: true,
	                options: {valueType: `string[][]`,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(availabilityTimeslotSchema)

export default availabilityTimeslotSchema
