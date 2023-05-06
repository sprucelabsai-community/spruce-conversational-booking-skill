import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.appointments': [
			'can-hold-time','can-cancel-hold','can-book-appointment','can-create-appointment',
		]
		'appointments.management': [
			'can-configure-people-capabilities','can-configure-role-capabilities','can-register-capabilities',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.listEmitPermissions': [
			'can-list-appointments',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.updateListenPermissions': [
			'can-high-five',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.updateEmitPermissions': [
			'can-update-appointment',
		]
	}
}


export interface PermissionContractMap {}