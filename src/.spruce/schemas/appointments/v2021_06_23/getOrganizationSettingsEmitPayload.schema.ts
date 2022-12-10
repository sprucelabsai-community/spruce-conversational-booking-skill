import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getOrganizationSettingsEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitPayloadSchema  = {
	id: 'getOrganizationSettingsEmitPayload',
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

SchemaRegistry.getInstance().trackSchema(getOrganizationSettingsEmitPayloadSchema)

export default getOrganizationSettingsEmitPayloadSchema
