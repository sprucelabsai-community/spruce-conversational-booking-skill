import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAvailableTimesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTargetSchema  = {
	id: 'getAvailableTimesEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(getAvailableTimesEmitTargetSchema)

export default getAvailableTimesEmitTargetSchema
