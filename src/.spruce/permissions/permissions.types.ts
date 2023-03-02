import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.bookEmitPermissions': [
			'can-book-appointment',
		]
		'appointments.createHoldEmitPermissions': [
			'can-hold-time',
		]
		'appointments.cancelHoldEmitPermissions': [
			'can-cancel-hold',
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
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.createPersonCapabilityEmitPermissions': [
			'can-create-person-capability',
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
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.updatePersonCapabilityEmitPermissions': [
			'can-update-people-capability',
		]
		'appointments.updateRoleCapabilityEmitPermissions': [
			'can-update-role-capability',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.registerCapabilitiesListenPermissions': [
			'can-register-capabilities',
		]
		'appointments.updateListenPermissions': [
			'can-high-five',
		]
		'appointments.updateEmitPermissions': [
			'can-update-appointment',
		]
		'appointments.createEmitPermissions': [
			'can-create-appointment',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
	}
}


export interface PermissionContractMap {}