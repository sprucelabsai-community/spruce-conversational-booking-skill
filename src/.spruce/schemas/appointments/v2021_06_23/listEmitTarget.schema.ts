import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListEmitTargetSchema  = {
	id: 'listEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'guestId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listEmitTargetSchema)

export default listEmitTargetSchema
