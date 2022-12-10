import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const bookResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.BookResponsePayloadSchema  = {
	id: 'bookResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointmentId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(bookResponsePayloadSchema)

export default bookResponsePayloadSchema
