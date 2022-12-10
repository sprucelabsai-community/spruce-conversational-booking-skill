import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didBookAppointmentsEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetSchema  = {
	id: 'didBookAppointmentsEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookAppointmentsEmitTargetSchema)

export default didBookAppointmentsEmitTargetSchema
