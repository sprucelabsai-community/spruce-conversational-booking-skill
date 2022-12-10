import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetEmitTargetSchema  = {
	id: 'getEmitTarget',
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
	            /** . */
	            'appointmentId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'calendarEventId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getEmitTargetSchema)

export default getEmitTargetSchema
