import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getServiceColorsEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getServiceColorsEmitTarget.schema'

const getServiceColorsEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetServiceColorsEmitTargetAndPayloadSchema  = {
	id: 'getServiceColorsEmitTargetAndPayload',
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
	                options: {schema: getServiceColorsEmitTargetSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getServiceColorsEmitTargetAndPayloadSchema)

export default getServiceColorsEmitTargetAndPayloadSchema
