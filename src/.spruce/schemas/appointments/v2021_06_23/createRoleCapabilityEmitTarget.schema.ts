import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createRoleCapabilityEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTargetSchema  = {
	id: 'createRoleCapabilityEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'roleId': {
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

SchemaRegistry.getInstance().trackSchema(createRoleCapabilityEmitTargetSchema)

export default createRoleCapabilityEmitTargetSchema
