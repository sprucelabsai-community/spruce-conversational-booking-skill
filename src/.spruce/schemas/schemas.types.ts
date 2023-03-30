/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface BookEmitTarget {
			
				
				'locationId': string
				
				'holdId': string
		}

		interface BookEmitTargetSchema extends SpruceSchema.Schema {
			id: 'bookEmitTarget',
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
			            /** . */
			            'holdId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface BookEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.BookEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface BookEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.BookEmitTarget
		}

		interface BookEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'bookEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.BookEmitTargetSchema,}
			            },
			    }
		}

		interface BookEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.BookEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface BookResponsePayload {
			
				
				'appointmentId': string
		}

		interface BookResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'bookResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointmentId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface BookResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.BookResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CancelHoldEmitTarget {
			
				
				'locationId': string
				
				'holdId': string
		}

		interface CancelHoldEmitTargetSchema extends SpruceSchema.Schema {
			id: 'cancelHoldEmitTarget',
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
			            /** . */
			            'holdId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CancelHoldEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CancelHoldEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CancelHoldEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CancelHoldEmitTarget
		}

		interface CancelHoldEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'cancelHoldEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CancelHoldEmitTargetSchema,}
			            },
			    }
		}

		interface CancelHoldEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CancelHoldEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CancelHoldResponsePayload {
			
				
				'success': boolean
		}

		interface CancelHoldResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'cancelHoldResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CancelHoldResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CancelHoldResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateEmitTarget {
			
				
				'locationId': string
				
				'guestId'?: string| undefined | null
		}

		interface CreateEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createEmitTarget',
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
			            /** . */
			            'guestId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface CreateEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreateEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreateEmitPayload
		}

		interface CreateEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateAppointmentService {
			
				
				'dateTimeMs'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'serviceId': string
				
				'providerId'?: string| undefined | null
				
				'calendarEventId'?: string| undefined | null
		}

		interface CreateAppointmentServiceSchema extends SpruceSchema.Schema {
			id: 'createAppointmentService',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'dateTimeMs': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'providerId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'calendarEventId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface CreateAppointmentServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateAppointmentServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateEmitPayload {
			
				
				'services': SpruceSchemas.Appointments.v2021_06_23.CreateAppointmentService[]
		}

		interface CreateEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateAppointmentServiceSchema,}
			            },
			    }
		}

		interface CreateEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateResponsePayload {
			
				
				'appointment': SpruceSchemas.Appointments.v2021_06_23.Appointment
		}

		interface CreateResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointment': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentSchema,}
			            },
			    }
		}

		interface CreateResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AppointmentServiceTarget {
			
				
				'appointmentId': string
				
				'calendarEventId': string
				
				'serviceId': string
				
				'locationId': string
		}

		interface AppointmentServiceTargetSchema extends SpruceSchema.Schema {
			id: 'appointmentServiceTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointmentId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'calendarEventId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AppointmentServiceTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateCategoryEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateCategoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createCategoryEmitTarget',
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

		interface CreateCategoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateCategoryEmitPayload {
			
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
		}

		interface CreateCategoryEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createCategoryEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface CreateCategoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateCategoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitPayload
		}

		interface CreateCategoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createCategoryEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateCategoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateCategoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateCategory {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				/** Description. */
				'description'?: string| undefined | null
		}

		interface CreateCategorySchema extends SpruceSchema.Schema {
			id: 'createCategory',
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
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface CreateCategoryEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateCategorySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateCategoryResponsePayload {
			
				
				'category': SpruceSchemas.Appointments.v2021_06_23.CreateCategory
		}

		interface CreateCategoryResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createCategoryResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'category': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateCategorySchema,}
			            },
			    }
		}

		interface CreateCategoryResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateCategoryResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateHoldEmitTarget {
			
				
				'locationId': string
				
				'pastAppointmentId'?: string| undefined | null
		}

		interface CreateHoldEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createHoldEmitTarget',
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
			            /** . */
			            'pastAppointmentId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface CreateHoldEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateHoldEmitPayload {
			
				
				'startDateTimeMs': SpruceSchema.DateTimeFieldValue
				
				'providersAndServices': SpruceSchemas.Appointments.v2021_06_23.ProviderAndService[]
		}

		interface CreateHoldEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createHoldEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'startDateTimeMs': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'providersAndServices': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ProviderAndServiceSchema,}
			            },
			    }
		}

		interface CreateHoldEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateHoldEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitPayload
		}

		interface CreateHoldEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createHoldEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateHoldEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateHoldEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateHoldResponsePayload {
			
				
				'holdId': string
				
				'timeoutMs': number
		}

		interface CreateHoldResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createHoldResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'holdId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeoutMs': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateHoldResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateHoldResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreatePersonCapabilityEmitTarget {
			
				
				'capabilityPersonId': string
				
				'locationId': string
		}

		interface CreatePersonCapabilityEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createPersonCapabilityEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capabilityPersonId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreatePersonCapabilityEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreatePersonCapabilityEmitPayload {
			
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface CreatePersonCapabilityEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonCapabilityEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreatePersonCapabilityEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreatePersonCapabilityEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitPayload
		}

		interface CreatePersonCapabilityEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonCapabilityEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitPayloadSchema,}
			            },
			    }
		}

		interface CreatePersonCapabilityEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreatePersonCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface CreatePersonCapabilitySchema extends SpruceSchema.Schema {
			id: 'createPersonCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreatePersonCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreatePersonCapabilityResponsePayload {
			
				
				'capability': SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapability
		}

		interface CreatePersonCapabilityResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonCapabilityResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capability': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilitySchema,}
			            },
			    }
		}

		interface CreatePersonCapabilityResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreatePersonCapabilityResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateRoleCapabilityEmitPayload {
			
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface CreateRoleCapabilityEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleCapabilityEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateRoleCapabilityEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateRoleCapabilityEmitTarget {
			
				
				'roleId': string
				
				'organizationId': string
		}

		interface CreateRoleCapabilityEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createRoleCapabilityEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateRoleCapabilityEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateRoleCapabilityEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitPayload
		}

		interface CreateRoleCapabilityEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleCapabilityEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateRoleCapabilityEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateRoleCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface CreateRoleCapabilitySchema extends SpruceSchema.Schema {
			id: 'createRoleCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateRoleCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateRoleCapabilityResponsePayload {
			
				
				'capability': SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapability
		}

		interface CreateRoleCapabilityResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleCapabilityResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capability': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilitySchema,}
			            },
			    }
		}

		interface CreateRoleCapabilityResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateRoleCapabilityResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateServiceEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateServiceEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createServiceEmitTarget',
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

		interface CreateServiceEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateServiceEmitPayload {
			
				/** Name. */
				'name': string
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds'?: string[]| undefined | null
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
		}

		interface CreateServiceEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createServiceEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			    }
		}

		interface CreateServiceEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateServiceEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitPayload
		}

		interface CreateServiceEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createServiceEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateServiceEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateServiceEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateService {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds': string[]
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
		}

		interface CreateServiceSchema extends SpruceSchema.Schema {
			id: 'createService',
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			    }
		}

		interface CreateServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CreateServiceResponsePayload {
			
				
				'service': SpruceSchemas.Appointments.v2021_06_23.CreateService
		}

		interface CreateServiceResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createServiceResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'service': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CreateServiceSchema,}
			            },
			    }
		}

		interface CreateServiceResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CreateServiceResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteCategoryEmitTarget {
			
				
				'categoryId': string
				
				'organizationId': string
		}

		interface DeleteCategoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteCategoryEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'categoryId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteCategoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteCategoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryEmitTarget
		}

		interface DeleteCategoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteCategoryEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteCategoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteCategoryResponsePayload {
			
				
				'totalDeleted': number
		}

		interface DeleteCategoryResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteCategoryResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'totalDeleted': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteCategoryResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteCategoryResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteServiceEmitTarget {
			
				
				'serviceId': string
				
				'organizationId': string
		}

		interface DeleteServiceEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteServiceEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteServiceEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteServiceEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTarget
		}

		interface DeleteServiceEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteServiceEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteServiceEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteServiceEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DeleteServiceResponsePayload {
			
				
				'totalDeleted': number
		}

		interface DeleteServiceResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteServiceResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'totalDeleted': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteServiceResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DeleteServiceResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitTarget {
			
				
				'organizationId': string
		}

		interface DidBookAppointmentsEmitTargetSchema extends SpruceSchema.Schema {
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

		interface DidBookAppointmentsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayload
		}

		interface DidBookAppointmentsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayloadSchema,}
			            },
			    }
		}

		interface DidBookAppointmentsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface Appointments {
			
				
				'guestId'?: string| undefined | null
		}

		interface AppointmentsSchema extends SpruceSchema.Schema {
			id: 'appointments',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'guestId': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface AppointmentsEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentsSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitPayload {
			
				
				'appointments': SpruceSchemas.Appointments.v2021_06_23.Appointments[]
		}

		interface DidBookAppointmentsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointments': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentsSchema,}
			            },
			    }
		}

		interface DidBookAppointmentsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetEmitTarget {
			
				
				'locationId': string
				
				'appointmentId'?: string| undefined | null
				
				'calendarEventId'?: string| undefined | null
		}

		interface GetEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getEmitTarget',
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
			            /** . */
			            'appointmentId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'calendarEventId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.GetEmitTarget
		}

		interface GetEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetEmitTargetSchema,}
			            },
			    }
		}

		interface GetEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetResponsePayload {
			
				
				'appointment': SpruceSchemas.Appointments.v2021_06_23.Appointment
		}

		interface GetResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointment': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentSchema,}
			            },
			    }
		}

		interface GetResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetAvailableTimesEmitTarget {
			
				
				'locationId': string
		}

		interface GetAvailableTimesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getAvailableTimesEmitTarget',
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

		interface GetAvailableTimesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetAvailableTimesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitPayload
		}

		interface GetAvailableTimesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getAvailableTimesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitPayloadSchema,}
			            },
			    }
		}

		interface GetAvailableTimesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface OptionalProvidersAndServices {
			
				
				'providerId'?: string| undefined | null
				
				'serviceId'?: string| undefined | null
		}

		interface OptionalProvidersAndServicesSchema extends SpruceSchema.Schema {
			id: 'optionalProvidersAndServices',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'providerId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface OptionalProvidersAndServicesEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.OptionalProvidersAndServicesSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetAvailableTimesEmitPayload {
			
				
				'year': number
				
				'month': number
				
				'day': number
				
				'ignoreAppointmentId'?: string| undefined | null
				
				'providersAndServices': SpruceSchemas.Appointments.v2021_06_23.OptionalProvidersAndServices[]
		}

		interface GetAvailableTimesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getAvailableTimesEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'year': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'month': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'day': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'ignoreAppointmentId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'providersAndServices': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.OptionalProvidersAndServicesSchema,}
			            },
			    }
		}

		interface GetAvailableTimesEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AvailabilityTimeslot {
			
				
				'dateTimeMs': number
				
				'providerIdCombos': (string[][])
		}

		interface AvailabilityTimeslotSchema extends SpruceSchema.Schema {
			id: 'availabilityTimeslot',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Availability Timeslot',
			    fields: {
			            /** . */
			            'dateTimeMs': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'providerIdCombos': {
			                type: 'raw',
			                isRequired: true,
			                options: {valueType: `string[][]`,}
			            },
			    }
		}

		interface AvailabilityTimeslotEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AvailabilityTimeslotSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetAvailableTimesResponsePayload {
			
				
				'availableTimes': SpruceSchemas.Appointments.v2021_06_23.AvailabilityTimeslot[]
		}

		interface GetAvailableTimesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getAvailableTimesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'availableTimes': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AvailabilityTimeslotSchema,}
			            },
			    }
		}

		interface GetAvailableTimesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetAvailableTimesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetCategoryEmitTarget {
			
				
				'organizationId': string
				
				'categoryId': string
		}

		interface GetCategoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getCategoryEmitTarget',
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
			            /** . */
			            'categoryId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetCategoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetCategoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetCategoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.GetCategoryEmitTarget
		}

		interface GetCategoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getCategoryEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetCategoryEmitTargetSchema,}
			            },
			    }
		}

		interface GetCategoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetCategoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetCategoryCategory {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				/** Description. */
				'description'?: string| undefined | null
		}

		interface GetCategoryCategorySchema extends SpruceSchema.Schema {
			id: 'getCategoryCategory',
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
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface GetCategoryCategoryEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetCategoryCategorySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetCategoryResponsePayload {
			
				
				'category': SpruceSchemas.Appointments.v2021_06_23.GetCategoryCategory
		}

		interface GetCategoryResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getCategoryResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'category': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetCategoryCategorySchema,}
			            },
			    }
		}

		interface GetCategoryResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetCategoryResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetOrganizationSettingsEmitTarget {
			
				
				'organizationId': string
		}

		interface GetOrganizationSettingsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getOrganizationSettingsEmitTarget',
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

		interface GetOrganizationSettingsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetOrganizationSettingsEmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface GetOrganizationSettingsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationSettingsEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Update me. */
			            'aTextField': {
			                label: 'Update me',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface GetOrganizationSettingsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetOrganizationSettingsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitPayload| undefined | null
		}

		interface GetOrganizationSettingsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationSettingsEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitPayloadSchema,}
			            },
			    }
		}

		interface GetOrganizationSettingsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetOrgSettingsSettings {
			
				/** Approval. */
				'approvalStrategy': ("auto-approve" | "required-all" | "required-first")
				/** Available times for guests. */
				'guestAvailabilityInterval': ("15" | "30" | "60" | "custom")
		}

		interface GetOrgSettingsSettingsSchema extends SpruceSchema.Schema {
			id: 'getOrgSettingsSettings',
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
			    }
		}

		interface GetOrgSettingsSettingsEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetOrgSettingsSettingsSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetOrganizationSettingsResponsePayload {
			
				
				'settings': SpruceSchemas.Appointments.v2021_06_23.GetOrgSettingsSettings
		}

		interface GetOrganizationSettingsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationSettingsResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'settings': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetOrgSettingsSettingsSchema,}
			            },
			    }
		}

		interface GetOrganizationSettingsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetOrganizationSettingsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetServiceEmitTarget {
			
				
				'organizationId': string
				
				'serviceId': string
		}

		interface GetServiceEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getServiceEmitTarget',
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
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetServiceEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetServiceEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetServiceEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.GetServiceEmitTarget
		}

		interface GetServiceEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getServiceEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetServiceEmitTargetSchema,}
			            },
			    }
		}

		interface GetServiceEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetServiceEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetService {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds': string[]
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
		}

		interface GetServiceSchema extends SpruceSchema.Schema {
			id: 'getService',
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			    }
		}

		interface GetServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetServiceResponsePayload {
			
				
				'service': SpruceSchemas.Appointments.v2021_06_23.GetService
		}

		interface GetServiceResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getServiceResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'service': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetServiceSchema,}
			            },
			    }
		}

		interface GetServiceResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetServiceResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListEmitTarget {
			
				
				'locationId'?: string| undefined | null
		}

		interface ListEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Appointments.v2021_06_23.ListEmitTarget| undefined | null
		}

		interface ListEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListEmitTargetSchema,}
			            },
			    }
		}

		interface ListEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AppointmentService {
			
				
				'id': string
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'providerId': string
				
				'organizationId': string
				
				'guestId'?: string| undefined | null
				
				'providerCasualName': string
				
				'durationMinutes': number
				
				'startDateTimeMs': number
				
				'price'?: number| undefined | null
				
				'serviceName': string
				
				'target': SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceTarget
		}

		interface AppointmentServiceSchema extends SpruceSchema.Schema {
			id: 'appointmentService',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Appointment service',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                isPrivate: true,
			                options: undefined
			            },
			            /** . */
			            'providerId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'guestId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'providerCasualName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'durationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'startDateTimeMs': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'serviceName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceTargetSchema,}
			            },
			    }
		}

		interface AppointmentServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AppointmentTarget {
			
				
				'guestId'?: string| undefined | null
				
				'locationId': string
		}

		interface AppointmentTargetSchema extends SpruceSchema.Schema {
			id: 'appointmentTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'guestId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AppointmentTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListAppointment {
			
				
				'id': string
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'target': SpruceSchemas.Appointments.v2021_06_23.AppointmentTarget
				
				'isCancelled'?: boolean| undefined | null
				
				'statuses': string[]
				
				'services': SpruceSchemas.Appointments.v2021_06_23.AppointmentService[]
		}

		interface ListAppointmentSchema extends SpruceSchema.Schema {
			id: 'listAppointment',
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
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentTargetSchema,}
			            },
			            /** . */
			            'isCancelled': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'statuses': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceSchema,}
			            },
			    }
		}

		interface ListAppointmentEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListAppointmentSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListResponsePayload {
			
				
				'appointments': SpruceSchemas.Appointments.v2021_06_23.ListAppointment[]
		}

		interface ListResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointments': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListAppointmentSchema,}
			            },
			    }
		}

		interface ListResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListBookedServicesEmitTarget {
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'guestId': string
		}

		interface ListBookedServicesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listBookedServicesEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'guestId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListBookedServicesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListBookedServicesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesEmitTarget
		}

		interface ListBookedServicesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listBookedServicesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesEmitTargetSchema,}
			            },
			    }
		}

		interface ListBookedServicesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListBookedService {
			
				
				'id': string
		}

		interface ListBookedServiceSchema extends SpruceSchema.Schema {
			id: 'listBookedService',
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
			    }
		}

		interface ListBookedServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListBookedServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListBookedServicesResponsePayload {
			
				
				'services': SpruceSchemas.Appointments.v2021_06_23.ListBookedService[]
		}

		interface ListBookedServicesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listBookedServicesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListBookedServiceSchema,}
			            },
			    }
		}

		interface ListBookedServicesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListBookedServicesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListCategoriesEmitTarget {
			
				
				'organizationId': string
		}

		interface ListCategoriesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listCategoriesEmitTarget',
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

		interface ListCategoriesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListCategoriesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListCategoriesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListCategoriesEmitTarget
		}

		interface ListCategoriesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listCategoriesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListCategoriesEmitTargetSchema,}
			            },
			    }
		}

		interface ListCategoriesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListCategoriesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListCategory {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				/** Description. */
				'description'?: string| undefined | null
		}

		interface ListCategorySchema extends SpruceSchema.Schema {
			id: 'listCategory',
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
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface ListCategoryEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListCategorySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListCategoriesResponsePayload {
			
				
				'categories': SpruceSchemas.Appointments.v2021_06_23.ListCategory[]
		}

		interface ListCategoriesResponsePayloadSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListCategorySchema,}
			            },
			    }
		}

		interface ListCategoriesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListCategoriesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListPeopleCapabilitiesEmitTarget {
			
				
				'capabilityPersonId': string
				
				'locationId': string
		}

		interface ListPeopleCapabilitiesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listPeopleCapabilitiesEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capabilityPersonId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListPeopleCapabilitiesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListPeopleCapabilitiesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesEmitTarget
		}

		interface ListPeopleCapabilitiesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleCapabilitiesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesEmitTargetSchema,}
			            },
			    }
		}

		interface ListPeopleCapabilitiesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListPeopleCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface ListPeopleCapabilitySchema extends SpruceSchema.Schema {
			id: 'listPeopleCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListPeopleCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListPeopleCapabilitiesResponsePayload {
			
				
				'capabilities': SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapability[]
		}

		interface ListPeopleCapabilitiesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleCapabilitiesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capabilities': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitySchema,}
			            },
			    }
		}

		interface ListPeopleCapabilitiesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListPeopleCapabilitiesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListRoleCapabilitiesEmitTarget {
			
				
				'roleId': string
				
				'organizationId': string
		}

		interface ListRoleCapabilitiesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listRoleCapabilitiesEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListRoleCapabilitiesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListRoleCapabilitiesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesEmitTarget
		}

		interface ListRoleCapabilitiesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listRoleCapabilitiesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesEmitTargetSchema,}
			            },
			    }
		}

		interface ListRoleCapabilitiesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListRoleCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface ListRoleCapabilitySchema extends SpruceSchema.Schema {
			id: 'listRoleCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListRoleCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListRoleCapabilitiesResponsePayload {
			
				
				'capabilities': SpruceSchemas.Appointments.v2021_06_23.ListRoleCapability[]
		}

		interface ListRoleCapabilitiesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listRoleCapabilitiesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capabilities': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitySchema,}
			            },
			    }
		}

		interface ListRoleCapabilitiesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListRoleCapabilitiesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesEmitTarget {
			
				
				'organizationId': string
				
				'categoryIds'?: string[]| undefined | null
		}

		interface ListServicesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listServicesEmitTarget',
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
			            /** . */
			            'categoryIds': {
			                type: 'id',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface ListServicesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListServicesEmitTarget
		}

		interface ListServicesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listServicesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListServicesEmitTargetSchema,}
			            },
			    }
		}

		interface ListServicesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListService {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds': string[]
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
		}

		interface ListServiceSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			    }
		}

		interface ListServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesResponsePayload {
			
				
				'services': SpruceSchemas.Appointments.v2021_06_23.ListService[]
		}

		interface ListServicesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listServicesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListServiceSchema,}
			            },
			    }
		}

		interface ListServicesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesWithProvidersEmitTarget {
			
				
				'locationId': string
		}

		interface ListServicesWithProvidersEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listServicesWithProvidersEmitTarget',
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

		interface ListServicesWithProvidersEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesWithProvidersEmitPayload {
			
				
				'requestedDateTime'?: number| undefined | null
		}

		interface ListServicesWithProvidersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listServicesWithProvidersEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'requestedDateTime': {
			                type: 'number',
			                options: undefined
			            },
			    }
		}

		interface ListServicesWithProvidersEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesWithProvidersEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitPayload| undefined | null
		}

		interface ListServicesWithProvidersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listServicesWithProvidersEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitPayloadSchema,}
			            },
			    }
		}

		interface ListServicesWithProvidersEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ServiceWithProvidersProvider {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'durationMinutes': number
				
				'casualName': string
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'timeBlocks': SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]
		}

		interface ServiceWithProvidersProviderSchema extends SpruceSchema.Schema {
			id: 'serviceWithProvidersProvider',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'durationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'casualName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			    }
		}

		interface ServiceWithProvidersProviderEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersProviderSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ServiceWithProviders {
			
				
				'id': string
				
				'name': string
				
				'description'?: string| undefined | null
				
				'minPrice': number
				
				'maxPrice': number
				
				'minDurationMinutes': number
				
				'maxDurationMinutes': number
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'providers': SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersProvider[]
		}

		interface ServiceWithProvidersSchema extends SpruceSchema.Schema {
			id: 'serviceWithProviders',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Service with provider',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'description': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'minPrice': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'maxPrice': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'minDurationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'maxDurationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			            /** . */
			            'providers': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersProviderSchema,}
			            },
			    }
		}

		interface ServiceWithProvidersEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListServicesWithProvidersResponsePayload {
			
				
				'services': SpruceSchemas.Appointments.v2021_06_23.ServiceWithProviders[]
		}

		interface ListServicesWithProvidersResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listServicesWithProvidersResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ServiceWithProvidersSchema,}
			            },
			    }
		}

		interface ListServicesWithProvidersResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListServicesWithProvidersResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListStatusesEmitTarget {
			
				
				'organizationId': string
		}

		interface ListStatusesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listStatusesEmitTarget',
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

		interface ListStatusesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListStatusesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListStatusesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.ListStatusesEmitTarget
		}

		interface ListStatusesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listStatusesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ListStatusesEmitTargetSchema,}
			            },
			    }
		}

		interface ListStatusesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListStatusesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ListStatusesResponsePayload {
			
				
				'statuses': SpruceSchemas.Appointments.v2021_06_23.AppointmentStatus[]
		}

		interface ListStatusesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listStatusesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'statuses': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusSchema,}
			            },
			    }
		}

		interface ListStatusesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ListStatusesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AppointmentStatusTarget {
			
				
				'organizationId': string
		}

		interface AppointmentStatusTargetSchema extends SpruceSchema.Schema {
			id: 'appointmentStatusTarget',
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

		interface AppointmentStatusTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RegisterCapabilitiesEmitTarget {
			
				
				'locationId': string
		}

		interface RegisterCapabilitiesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'registerCapabilitiesEmitTarget',
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

		interface RegisterCapabilitiesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RegisterCapabilitiesEmitPayload {
			
				
				'year': number
				
				'month': number
				
				'day': number
		}

		interface RegisterCapabilitiesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerCapabilitiesEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'year': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'month': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'day': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RegisterCapabilitiesEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RegisterCapabilitiesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitPayload
		}

		interface RegisterCapabilitiesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerCapabilitiesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterCapabilitiesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RoleCapabilityEventTarget {
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
		}

		interface RoleCapabilityEventTargetSchema extends SpruceSchema.Schema {
			id: 'roleCapabilityEventTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface RoleCapabilityEventTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RoleCapabilityEventTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RegisterCapabilitiesCapability {
			
				
				'price'?: number| undefined | null
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
				
				'target': SpruceSchemas.Appointments.v2021_06_23.RoleCapabilityEventTarget
		}

		interface RegisterCapabilitiesCapabilitySchema extends SpruceSchema.Schema {
			id: 'registerCapabilitiesCapability',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isPrivate: true,
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.RoleCapabilityEventTargetSchema,}
			            },
			    }
		}

		interface RegisterCapabilitiesCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface RegisterCapabilitiesResponsePayload {
			
				
				'capabilities': SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesCapability[]
		}

		interface RegisterCapabilitiesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerCapabilitiesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capabilities': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesCapabilitySchema,}
			            },
			    }
		}

		interface RegisterCapabilitiesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.RegisterCapabilitiesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface SyncStatusesEmitTarget {
			
				
				'organizationId': string
		}

		interface SyncStatusesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'syncStatusesEmitTarget',
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

		interface SyncStatusesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface SyncStatus {
			
				/** Name. */
				'name': string
				/** Style. */
				'style'?: ("draft" | "tentative" | "upcoming" | "unavailable" | "blocked" | "active" | "past" | "warn" | "critical")| undefined | null
				/** Icon. */
				'lineIcon'?: ("star" | "alarm" | "restricted" | "award-badge" | "money-sign" | "star-filled")| undefined | null
		}

		interface SyncStatusSchema extends SpruceSchema.Schema {
			id: 'syncStatus',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Style. */
			            'style': {
			                label: 'Style',
			                type: 'select',
			                options: {choices: [{"value":"draft","label":"Draft"},{"value":"tentative","label":"Tentative"},{"value":"upcoming","label":"Upcoming"},{"value":"unavailable","label":"Unavailable"},{"value":"blocked","label":"Blocked"},{"value":"active","label":"Active"},{"value":"past","label":"Past"},{"value":"warn","label":"Warning"},{"value":"critical","label":"Critical"}],}
			            },
			            /** Icon. */
			            'lineIcon': {
			                label: 'Icon',
			                type: 'select',
			                options: {choices: [{"value":"star","label":"star"},{"value":"alarm","label":"alarm"},{"value":"restricted","label":"restricted"},{"value":"award-badge","label":"award-badge"},{"value":"money-sign","label":"money-sign"},{"value":"star-filled","label":"star-filled"}],}
			            },
			    }
		}

		interface SyncStatusEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.SyncStatusSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface SyncStatusesEmitPayload {
			
				
				'statuses': SpruceSchemas.Appointments.v2021_06_23.SyncStatus[]
		}

		interface SyncStatusesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'syncStatusesEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'statuses': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.SyncStatusSchema,}
			            },
			    }
		}

		interface SyncStatusesEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface SyncStatusesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitPayload
		}

		interface SyncStatusesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'syncStatusesEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitPayloadSchema,}
			            },
			    }
		}

		interface SyncStatusesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.SyncStatusesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AppointmentStatus {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'slug': string
				
				'order': number
				
				'target': SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusTarget
				/** Style. */
				'style'?: ("draft" | "tentative" | "upcoming" | "unavailable" | "blocked" | "active" | "past" | "warn" | "critical")| undefined | null
				/** Icon. */
				'lineIcon'?: ("star" | "alarm" | "restricted" | "award-badge" | "money-sign" | "star-filled")| undefined | null
		}

		interface AppointmentStatusSchema extends SpruceSchema.Schema {
			id: 'appointmentStatus',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Appointment status',
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
			            'slug': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'order': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusTargetSchema,}
			            },
			            /** Style. */
			            'style': {
			                label: 'Style',
			                type: 'select',
			                options: {choices: [{"value":"draft","label":"Draft"},{"value":"tentative","label":"Tentative"},{"value":"upcoming","label":"Upcoming"},{"value":"unavailable","label":"Unavailable"},{"value":"blocked","label":"Blocked"},{"value":"active","label":"Active"},{"value":"past","label":"Past"},{"value":"warn","label":"Warning"},{"value":"critical","label":"Critical"}],}
			            },
			            /** Icon. */
			            'lineIcon': {
			                label: 'Icon',
			                type: 'select',
			                options: {choices: [{"value":"star","label":"star"},{"value":"alarm","label":"alarm"},{"value":"restricted","label":"restricted"},{"value":"award-badge","label":"award-badge"},{"value":"money-sign","label":"money-sign"},{"value":"star-filled","label":"star-filled"}],}
			            },
			    }
		}

		interface AppointmentStatusEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface SyncStatusesResponsePayload {
			
				
				'statuses': SpruceSchemas.Appointments.v2021_06_23.AppointmentStatus[]
		}

		interface SyncStatusesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'syncStatusesResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'statuses': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentStatusSchema,}
			            },
			    }
		}

		interface SyncStatusesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.SyncStatusesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateEmitTarget {
			
				
				'appointmentId': string
				
				'locationId': string
		}

		interface UpdateEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointmentId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.UpdateEmitPayload| undefined | null
		}

		interface UpdateEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface AddServiceWithProvider {
			
				
				'serviceId': string
				
				'calendarEventId': string
		}

		interface AddServiceWithProviderSchema extends SpruceSchema.Schema {
			id: 'addServiceWithProvider',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'calendarEventId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AddServiceWithProviderEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AddServiceWithProviderSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateEmitPayload {
			
				
				'appointmentServiceIdsToRemove'?: string[]| undefined | null
				
				'shouldNotifyGuestOfChanges'?: boolean| undefined | null
				
				'addServiceWithProvider'?: SpruceSchemas.Appointments.v2021_06_23.AddServiceWithProvider| undefined | null
				
				'statuses'?: string[]| undefined | null
				
				'guestId'?: string| undefined | null
		}

		interface UpdateEmitPayloadSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AddServiceWithProviderSchema,}
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

		interface UpdateEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface Appointment {
			
				
				'id': string
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'target': SpruceSchemas.Appointments.v2021_06_23.AppointmentTarget
				
				'isCancelled'?: boolean| undefined | null
				
				'statuses': string[]
				
				'services': SpruceSchemas.Appointments.v2021_06_23.AppointmentService[]
		}

		interface AppointmentSchema extends SpruceSchema.Schema {
			id: 'appointment',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Appointment',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentTargetSchema,}
			            },
			            /** . */
			            'isCancelled': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'statuses': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'services': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentServiceSchema,}
			            },
			    }
		}

		interface AppointmentEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateResponsePayload {
			
				
				'appointment': SpruceSchemas.Appointments.v2021_06_23.Appointment
		}

		interface UpdateResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointment': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentSchema,}
			            },
			    }
		}

		interface UpdateResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateCategoryEmitTarget {
			
				
				'organizationId': string
				
				'categoryId': string
		}

		interface UpdateCategoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateCategoryEmitTarget',
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
			            /** . */
			            'categoryId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateCategoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateCategoryEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Description. */
				'description'?: string| undefined | null
		}

		interface UpdateCategoryEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateCategoryEmitPayload',
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
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface UpdateCategoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateCategoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitPayload| undefined | null
		}

		interface UpdateCategoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateCategoryEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateCategoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatetCategoryCategory {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				/** Description. */
				'description'?: string| undefined | null
		}

		interface UpdatetCategoryCategorySchema extends SpruceSchema.Schema {
			id: 'updatetCategoryCategory',
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
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface UpdatetCategoryCategoryEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatetCategoryCategorySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateCategoryResponsePayload {
			
				
				'category': SpruceSchemas.Appointments.v2021_06_23.UpdatetCategoryCategory
		}

		interface UpdateCategoryResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateCategoryResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'category': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdatetCategoryCategorySchema,}
			            },
			    }
		}

		interface UpdateCategoryResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateCategoryResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateOrganizationSettingsEmitTarget {
			
				
				'organizationId': string
		}

		interface UpdateOrganizationSettingsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationSettingsEmitTarget',
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

		interface UpdateOrganizationSettingsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateOrganizationSettingsEmitPayload {
			
				/** Approval. */
				'approvalStrategy': ("auto-approve" | "required-all" | "required-first")
				/** Available times for guests. */
				'guestAvailabilityInterval': ("15" | "30" | "60" | "custom")
		}

		interface UpdateOrganizationSettingsEmitPayloadSchema extends SpruceSchema.Schema {
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
			    }
		}

		interface UpdateOrganizationSettingsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateOrganizationSettingsResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface UpdateOrganizationSettingsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationSettingsResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Update me. */
			            'aTextField': {
			                label: 'Update me',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface UpdateOrganizationSettingsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatePersonCapabilityEmitTarget {
			
				
				'locationId': string
				
				'capabilityId': string
		}

		interface UpdatePersonCapabilityEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updatePersonCapabilityEmitTarget',
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
			            /** . */
			            'capabilityId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdatePersonCapabilityEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatePersonCapabilityEmitPayload {
			
				
				'price'?: number| undefined | null
				
				'isEnabled'?: boolean| undefined | null
				
				'doesOffer'?: boolean| undefined | null
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId'?: string| undefined | null
		}

		interface UpdatePersonCapabilityEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonCapabilityEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface UpdatePersonCapabilityEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatePersonCapabilityEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitPayload| undefined | null
		}

		interface UpdatePersonCapabilityEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonCapabilityEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdatePersonCapabilityEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatePersonCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface UpdatePersonCapabilitySchema extends SpruceSchema.Schema {
			id: 'updatePersonCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdatePersonCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdatePersonCapabilityResponsePayload {
			
				
				'capability': SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapability
		}

		interface UpdatePersonCapabilityResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonCapabilityResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capability': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilitySchema,}
			            },
			    }
		}

		interface UpdatePersonCapabilityResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdatePersonCapabilityResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateRoleCapabilityEmitTarget {
			
				
				'organizationId': string
				
				'capabilityId': string
		}

		interface UpdateRoleCapabilityEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateRoleCapabilityEmitTarget',
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
			            /** . */
			            'capabilityId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateRoleCapabilityEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateRoleCapabilityEmitPayload {
			
				
				'price'?: number| undefined | null
				
				'isEnabled'?: boolean| undefined | null
				
				'doesOffer'?: boolean| undefined | null
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId'?: string| undefined | null
		}

		interface UpdateRoleCapabilityEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleCapabilityEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface UpdateRoleCapabilityEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateRoleCapabilityEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitPayload| undefined | null
		}

		interface UpdateRoleCapabilityEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleCapabilityEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateRoleCapabilityEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateRoleCapabilityResponsePayload {
			
				
				'capability': SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapability
		}

		interface UpdateRoleCapabilityResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleCapabilityResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'capability': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilitySchema,}
			            },
			    }
		}

		interface UpdateRoleCapabilityResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilityResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface CapabilityTimeBlock {
			
				
				'durationMinutes': number
				
				'title'?: string| undefined | null
				
				'isBusy': boolean
		}

		interface CapabilityTimeBlockSchema extends SpruceSchema.Schema {
			id: 'capabilityTimeBlock',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Capability time block ',
			    fields: {
			            /** . */
			            'durationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'title': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'isBusy': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CapabilityTimeBlockEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateRoleCapability {
			
				
				'id': string
				
				'price'?: number| undefined | null
				
				'isEnabled': boolean
				
				'doesOffer': boolean
				
				'timeBlocks'?: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlock[]| undefined | null
				
				'serviceId': string
		}

		interface UpdateRoleCapabilitySchema extends SpruceSchema.Schema {
			id: 'updateRoleCapability',
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
			            /** . */
			            'price': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'isEnabled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'doesOffer': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.CapabilityTimeBlockSchema,}
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateRoleCapabilityEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateRoleCapabilitySchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateServiceEmitTarget {
			
				
				'serviceId': string
				
				'organizationId': string
		}

		interface UpdateServiceEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateServiceEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateServiceEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateServiceEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds'?: string[]| undefined | null
				
				'timeBlocks'?: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]| undefined | null
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'addCategoryIds'?: string[]| undefined | null
				
				'removeCategoryIds'?: string[]| undefined | null
		}

		interface UpdateServiceEmitPayloadSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
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

		interface UpdateServiceEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface GetServiceService {
			
				
				'id': string
				/** Name. */
				'name': string
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				/** Description. A guest will see this when booking an appointment. */
				'description'?: string| undefined | null
				/** Starting Price. This price can be overridden by location or by teammate. */
				'price'?: number| undefined | null
				
				'categoryIds': string[]
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'icon'?: SpruceSchema.ImageFieldValue| undefined | null
		}

		interface GetServiceServiceSchema extends SpruceSchema.Schema {
			id: 'getServiceService',
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
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
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
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'icon': {
			                type: 'image',
			                options: undefined
			            },
			    }
		}

		interface GetServiceServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.GetServiceServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateServiceResponsePayload {
			
				
				'service': SpruceSchemas.Appointments.v2021_06_23.GetServiceService
		}

		interface UpdateServiceResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateServiceResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'service': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.GetServiceServiceSchema,}
			            },
			    }
		}

		interface UpdateServiceResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateServiceResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateOrganizationSettingsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitPayload
		}

		interface UpdateOrganizationSettingsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationSettingsEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateOrganizationSettingsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateOrganizationSettingsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface UpdateServiceEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTarget
				
				'payload'?: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitPayload| undefined | null
		}

		interface UpdateServiceEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateServiceEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateServiceEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.UpdateServiceEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface WillSendConfirmationEmitTarget {
			
				
				'locationId': string
		}

		interface WillSendConfirmationEmitTargetSchema extends SpruceSchema.Schema {
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

		interface WillSendConfirmationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface WillSendConfirmationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTarget
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitPayload
		}

		interface WillSendConfirmationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'willSendConfirmationEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitPayloadSchema,}
			            },
			    }
		}

		interface WillSendConfirmationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface ProviderAndService {
			
				
				'providerId': string
				
				'serviceId': string
		}

		interface ProviderAndServiceSchema extends SpruceSchema.Schema {
			id: 'providerAndService',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: 'Provider and service',
			    fields: {
			            /** . */
			            'providerId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'serviceId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ProviderAndServiceEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.ProviderAndServiceSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface WillSendConfirmationEmitPayload {
			
				
				'appointmentId': string
				
				'providersAndServices': SpruceSchemas.Appointments.v2021_06_23.ProviderAndService[]
		}

		interface WillSendConfirmationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'willSendConfirmationEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointmentId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'providersAndServices': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.ProviderAndServiceSchema,}
			            },
			    }
		}

		interface WillSendConfirmationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface WillSendConfirmationResponsePayload {
			
				
				'nextINeedYouTo'?: string[]| undefined | null
				
				'youShouldKnowThat'?: string[]| undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
		}

		interface WillSendConfirmationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'willSendConfirmationResponsePayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'nextINeedYouTo': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'youShouldKnowThat': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'links': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
			            },
			    }
		}

		interface WillSendConfirmationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.WillSendConfirmationResponsePayloadSchema> {}

	}

}
