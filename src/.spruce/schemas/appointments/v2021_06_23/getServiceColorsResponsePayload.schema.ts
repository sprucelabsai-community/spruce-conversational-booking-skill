import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import colorsByServiceSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/colorsByService.schema'

const getServiceColorsResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetServiceColorsResponsePayloadSchema  = {
	id: 'getServiceColorsResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'colorsByService': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: colorsByServiceSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getServiceColorsResponsePayloadSchema)

export default getServiceColorsResponsePayloadSchema
