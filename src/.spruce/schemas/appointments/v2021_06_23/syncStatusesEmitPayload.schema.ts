import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import syncStatusSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/syncStatus.schema'

const syncStatusesEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitPayloadSchema  = {
	id: 'syncStatusesEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'statuses': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: syncStatusSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(syncStatusesEmitPayloadSchema)

export default syncStatusesEmitPayloadSchema
