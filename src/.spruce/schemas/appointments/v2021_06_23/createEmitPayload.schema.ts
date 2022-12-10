import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateEmitPayloadSchema  = {
	id: 'createEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'guestId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createEmitPayloadSchema)

export default createEmitPayloadSchema
