import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'

const willSendConfirmationResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationResponsePayloadSchema  = {
	id: 'willSendConfirmationResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'nextINeedYouTo': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'youShouldKnowThat': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'links': {
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: linkSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(willSendConfirmationResponsePayloadSchema)

export default willSendConfirmationResponsePayloadSchema
