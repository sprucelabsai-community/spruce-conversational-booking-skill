import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventTimeBlockSchema_v2021_05_19 from '#spruce/schemas/calendarUtils/v2021_05_19/eventTimeBlock.schema'
import serviceCalendarEventColorsSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/serviceCalendarEventColors.schema'

const listServiceSchema: SpruceSchemas.Appointments.v2021_06_23.ListServiceSchema  = {
	id: 'listService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'number',
	                isRequired: true,
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
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'timeBlocks': {
	                type: 'schema',
	                isRequired: true,
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
	            'calendarEventColors': {
	                type: 'schema',
	                options: {schema: serviceCalendarEventColorsSchema_v2021_06_23,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listServiceSchema)

export default listServiceSchema
