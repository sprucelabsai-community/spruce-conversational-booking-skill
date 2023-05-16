import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didUpdateEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.DidUpdateEmitTargetSchema  = {
	id: 'didUpdateEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(didUpdateEmitTargetSchema)

export default didUpdateEmitTargetSchema
