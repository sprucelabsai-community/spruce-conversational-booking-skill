import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import listServicesWithProvidersEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listServicesWithProvidersEmitTarget.schema'
import listServicesWithProvidersEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listServicesWithProvidersEmitPayload.schema'

const listServicesWithProvidersEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitTargetAndPayloadSchema  = {
	id: 'listServicesWithProvidersEmitTargetAndPayload',
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
	                options: {schema: listServicesWithProvidersEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listServicesWithProvidersEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServicesWithProvidersEmitTargetAndPayloadSchema)

export default listServicesWithProvidersEmitTargetAndPayloadSchema
