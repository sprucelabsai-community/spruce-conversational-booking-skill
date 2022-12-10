import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateServiceEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTargetSchema  = {
	id: 'updateServiceEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'serviceId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateServiceEmitTargetSchema)

export default updateServiceEmitTargetSchema
