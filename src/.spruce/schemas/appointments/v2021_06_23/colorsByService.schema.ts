import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import serviceColorsSchema_v2021_06_23 from '#spruce/schemas/appointments/v2021_06_23/serviceColors.schema'

const colorsByServiceSchema: SpruceSchemas.Appointments.v2021_06_23.ColorsByServiceSchema  = {
	id: 'colorsByService',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	dynamicFieldSignature: { 
	    type: 'schema',
	    keyName: 'serviceId',
	    options: {schema: serviceColorsSchema_v2021_06_23,}
	},}

SchemaRegistry.getInstance().trackSchema(colorsByServiceSchema)

export default colorsByServiceSchema
