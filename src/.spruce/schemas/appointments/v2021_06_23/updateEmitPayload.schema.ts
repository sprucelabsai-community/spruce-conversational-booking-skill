import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import addServiceWithProviderSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/addServiceWithProvider.schema'

const updateEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateEmitPayloadSchema  = {
	id: 'updateEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'appointmentServiceIdsToRemove': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'shouldNotifyGuestOfChanges': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'addServiceWithProvider': {
	                type: 'schema',
	                options: {schema: addServiceWithProviderSchema_v2021_06_23,}
	            },
	            /** . */
	            'statuses': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'guestId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateEmitPayloadSchema)

export default updateEmitPayloadSchema
