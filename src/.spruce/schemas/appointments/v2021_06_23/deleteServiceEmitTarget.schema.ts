import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteServiceEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTargetSchema  = {
	id: 'deleteServiceEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(deleteServiceEmitTargetSchema)

export default deleteServiceEmitTargetSchema
