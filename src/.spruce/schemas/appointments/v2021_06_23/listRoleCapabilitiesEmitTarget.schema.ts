import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listRoleCapabilitiesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesEmitTargetSchema  = {
	id: 'listRoleCapabilitiesEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(listRoleCapabilitiesEmitTargetSchema)

export default listRoleCapabilitiesEmitTargetSchema
