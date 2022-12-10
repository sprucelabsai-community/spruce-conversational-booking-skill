import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import willSendConfirmationEmitTargetSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/willSendConfirmationEmitTarget.schema'
import willSendConfirmationEmitPayloadSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/willSendConfirmationEmitPayload.schema'

const willSendConfirmationEmitTargetAndPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTargetAndPayloadSchema  = {
	id: 'willSendConfirmationEmitTargetAndPayload',
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
	                options: {schema: willSendConfirmationEmitTargetSchema_v2021_06_23,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: willSendConfirmationEmitPayloadSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(willSendConfirmationEmitTargetAndPayloadSchema)

export default willSendConfirmationEmitTargetAndPayloadSchema
