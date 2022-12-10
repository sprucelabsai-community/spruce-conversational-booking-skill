import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const willSendConfirmationEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTargetSchema  = {
	id: 'willSendConfirmationEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(willSendConfirmationEmitTargetSchema)

export default willSendConfirmationEmitTargetSchema
