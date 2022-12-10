import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listBookedServicesEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesEmitTargetSchema  = {
	id: 'listBookedServicesEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'guestId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listBookedServicesEmitTargetSchema)

export default listBookedServicesEmitTargetSchema
