import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const cancelHoldResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CancelHoldResponsePayloadSchema  = {
	id: 'cancelHoldResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(cancelHoldResponsePayloadSchema)

export default cancelHoldResponsePayloadSchema
