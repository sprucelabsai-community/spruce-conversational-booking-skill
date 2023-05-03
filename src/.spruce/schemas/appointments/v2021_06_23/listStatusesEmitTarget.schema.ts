import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listStatusesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListStatusesEmitTargetSchema  = {
	id: 'listStatusesEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listStatusesEmitTargetSchema)

export default listStatusesEmitTargetSchema
