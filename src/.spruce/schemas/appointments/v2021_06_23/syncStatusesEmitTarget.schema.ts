import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const syncStatusesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitTargetSchema  = {
	id: 'syncStatusesEmitTarget',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(syncStatusesEmitTargetSchema)

export default syncStatusesEmitTargetSchema
