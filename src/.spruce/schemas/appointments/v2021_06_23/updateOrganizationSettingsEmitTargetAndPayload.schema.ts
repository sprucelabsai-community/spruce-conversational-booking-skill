import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updateOrganizationSettingsEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateOrganizationSettingsEmitTarget.schema'
import updateOrganizationSettingsEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updateOrganizationSettingsEmitPayload.schema'

const updateOrganizationSettingsEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTargetAndPayloadSchema  = {
	id: 'updateOrganizationSettingsEmitTargetAndPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateOrganizationSettingsEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateOrganizationSettingsEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrganizationSettingsEmitTargetAndPayloadSchema)

export default updateOrganizationSettingsEmitTargetAndPayloadSchema
