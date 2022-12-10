import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createHoldEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTargetSchema  = {
	id: 'createHoldEmitTarget',
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
	            'pastAppointmentId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createHoldEmitTargetSchema)

export default createHoldEmitTargetSchema
