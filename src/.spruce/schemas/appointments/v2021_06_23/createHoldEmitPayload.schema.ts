import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import providerAndServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/providerAndService.schema'

const createHoldEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitPayloadSchema  = {
	id: 'createHoldEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'startDateTimeMs': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'providersAndServices': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: providerAndServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createHoldEmitPayloadSchema)

export default createHoldEmitPayloadSchema
