import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateRoleCapabilityEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTargetSchema  = {
	id: 'updateRoleCapabilityEmitTarget',
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
	            'capabilityId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleCapabilityEmitTargetSchema)

export default updateRoleCapabilityEmitTargetSchema
