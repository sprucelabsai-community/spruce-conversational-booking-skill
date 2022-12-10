import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getServiceEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetServiceEmitTargetSchema  = {
	id: 'getServiceEmitTarget',
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
	            'serviceId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getServiceEmitTargetSchema)

export default getServiceEmitTargetSchema
