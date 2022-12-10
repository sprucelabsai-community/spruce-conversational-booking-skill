import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createPersonCapabilityEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTargetSchema  = {
	id: 'createPersonCapabilityEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'capabilityPersonId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createPersonCapabilityEmitTargetSchema)

export default createPersonCapabilityEmitTargetSchema
