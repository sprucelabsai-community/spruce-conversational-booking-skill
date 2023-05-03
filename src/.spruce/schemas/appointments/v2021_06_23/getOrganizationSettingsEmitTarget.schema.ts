import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getOrganizationSettingsEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitTargetSchema  = {
	id: 'getOrganizationSettingsEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getOrganizationSettingsEmitTargetSchema)

export default getOrganizationSettingsEmitTargetSchema
