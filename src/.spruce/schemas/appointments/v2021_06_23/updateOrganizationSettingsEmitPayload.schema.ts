import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateOrganizationSettingsEmitPayloadSchema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitPayloadSchema  = {
	id: 'updateOrganizationSettingsEmitPayload',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** Approval. */
	            'approvalStrategy': {
	                label: 'Approval',
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"label":"Auto-approve all appointments","value":"auto-approve"},{"label":"Require approval on all appointments","value":"required-all"},{"label":"Require approval on first appointment only","value":"required-first"}],}
	            },
	            /** Available times for guests. */
	            'guestAvailabilityInterval': {
	                label: 'Available times for guests',
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"label":"Every 15 minutes","value":"15"},{"label":"Every 30 minutes","value":"30"},{"label":"Every hour","value":"60"},{"label":"Custom","value":"custom"}],}
	            },
	            /** Require name to book. By default, a person only needs their number. Should I ask for their name too? */
	            'shouldRequireNameToBook': {
	                label: 'Require name to book',
	                type: 'boolean',
	                hint: 'By default, a person only needs their number. Should I ask for their name too?',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrganizationSettingsEmitPayloadSchema)

export default updateOrganizationSettingsEmitPayloadSchema
