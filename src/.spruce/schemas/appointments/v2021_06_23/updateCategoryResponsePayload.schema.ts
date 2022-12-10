import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updatetCategoryCategorySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/updatetCategoryCategory.schema'

const updateCategoryResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryResponsePayloadSchema  = {
	id: 'updateCategoryResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'category': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updatetCategoryCategorySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateCategoryResponsePayloadSchema)

export default updateCategoryResponsePayloadSchema
