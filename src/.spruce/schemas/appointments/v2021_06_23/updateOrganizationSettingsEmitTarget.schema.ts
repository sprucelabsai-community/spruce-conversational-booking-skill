import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateOrganizationSettingsEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTargetSchema  = {
	id: 'updateOrganizationSettingsEmitTarget',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrganizationSettingsEmitTargetSchema)

export default updateOrganizationSettingsEmitTargetSchema
