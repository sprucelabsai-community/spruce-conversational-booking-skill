import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateOrganizationSettingsResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsResponsePayloadSchema  = {
	id: 'updateOrganizationSettingsResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrganizationSettingsResponsePayloadSchema)

export default updateOrganizationSettingsResponsePayloadSchema
