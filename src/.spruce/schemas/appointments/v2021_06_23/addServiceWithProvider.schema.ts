import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addServiceWithProviderSchema: SpruceSchemas.Appointments.v2021_06_23.AddServiceWithProviderSchema  = {
	id: 'addServiceWithProvider',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'serviceId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'calendarEventId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addServiceWithProviderSchema)

export default addServiceWithProviderSchema
