import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createHoldResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldResponsePayloadSchema  = {
	id: 'createHoldResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'holdId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'timeoutMs': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createHoldResponsePayloadSchema)

export default createHoldResponsePayloadSchema
