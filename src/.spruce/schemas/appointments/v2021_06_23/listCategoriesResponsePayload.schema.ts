import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listCategorySchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/listCategory.schema'

const listCategoriesResponsePayloadSchema: SpruceSchemas.Appointments.v2021_06_23.ListCategoriesResponsePayloadSchema  = {
	id: 'listCategoriesResponsePayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'categories': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listCategorySchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listCategoriesResponsePayloadSchema)

export default listCategoriesResponsePayloadSchema
