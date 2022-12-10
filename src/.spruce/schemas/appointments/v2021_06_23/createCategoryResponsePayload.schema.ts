import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createCategorySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/createCategory.schema'

const createCategoryResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.CreateCategoryResponsePayloadSchema  = {
	id: 'createCategoryResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'category': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createCategorySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createCategoryResponsePayloadSchema)

export default createCategoryResponsePayloadSchema
