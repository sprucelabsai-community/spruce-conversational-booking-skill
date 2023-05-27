import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getServiceColorsEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetServiceColorsEmitTargetSchema  = {
	id: 'getServiceColorsEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getServiceColorsEmitTargetSchema)

export default getServiceColorsEmitTargetSchema
