import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteServiceResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.DeleteServiceResponsePayloadSchema  = {
	id: 'deleteServiceResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'totalDeleted': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteServiceResponsePayloadSchema)

export default deleteServiceResponsePayloadSchema
