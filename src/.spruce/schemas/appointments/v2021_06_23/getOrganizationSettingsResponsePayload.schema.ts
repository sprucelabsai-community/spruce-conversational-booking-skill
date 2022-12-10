import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getOrgSettingsSettingsSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getOrgSettingsSettings.schema'

const getOrganizationSettingsResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsResponsePayloadSchema  = {
	id: 'getOrganizationSettingsResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'settings': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getOrgSettingsSettingsSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getOrganizationSettingsResponsePayloadSchema)

export default getOrganizationSettingsResponsePayloadSchema
