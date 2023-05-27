import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const serviceColorsSchema: SpruceSchemas.Appointments.v2021_06_23.ServiceColorsSchema  = {
	id: 'serviceColors',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'backgroundColor': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'foregroundColor': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(serviceColorsSchema)

export default serviceColorsSchema
