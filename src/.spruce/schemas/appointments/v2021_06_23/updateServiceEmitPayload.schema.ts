import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventTimeBlockSchema_v2021_05_19 from '#spruce/schemas/calendarUtils/v2021_05_19/eventTimeBlock.schema'

const updateServiceEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitPayloadSchema  = {
	id: 'updateServiceEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                options: undefined
	            },
	            /** Description. A guest will see this when booking an appointment. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                hint: 'A guest will see this when booking an appointment.',
	                options: undefined
	            },
	            /** Starting Price. This price can be overridden by location or by teammate. */
	            'price': {
	                label: 'Starting Price',
	                type: 'number',
	                hint: 'This price can be overridden by location or by teammate.',
	                options: undefined
	            },
	            /** . */
	            'categoryIds': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'timeBlocks': {
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: eventTimeBlockSchema_v2021_05_19,}
	            },
	            /** . */
	            'icon': {
	                type: 'image',
	                options: undefined
	            },
	            /** . */
	            'color': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'addCategoryIds': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'removeCategoryIds': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateServiceEmitPayloadSchema)

export default updateServiceEmitPayloadSchema
