import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getCategoryCategorySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/getCategoryCategory.schema'

const getCategoryResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.GetCategoryResponsePayloadSchema  = {
	id: 'getCategoryResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'category': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getCategoryCategorySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getCategoryResponsePayloadSchema)

export default getCategoryResponsePayloadSchema
