import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.bookEmitPermissions': [
			'can-book-appointment',
		]
		'appointments.cancelHoldEmitPermissions': [
			'can-cancel-hold',
		]
		'appointments.createEmitPermissions': [
			'can-create-appointment',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.createHoldEmitPermissions': [
			'can-hold-time',
		]
		'appointments.createPersonCapabilityEmitPermissions': [
			'can-create-person-capability',
		]
		'appointments.createRoleCapabilityEmitPermissions': [
			'can-create-role-capability',
		]
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.listEmitPermissions': [
			'can-list-appointments',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.registerCapabilitiesListenPermissions': [
			'can-register-capabilities',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.updateEmitPermissions': [
			'can-update-appointment',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.updateListenPermissions': [
			'can-high-five',
		]
		'appointments.updatePersonCapabilityEmitPermissions': [
			'can-update-people-capability',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.updateRoleCapabilityEmitPermissions': [
			'can-update-role-capability',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
	}
}


export interface PermissionContractMap {}