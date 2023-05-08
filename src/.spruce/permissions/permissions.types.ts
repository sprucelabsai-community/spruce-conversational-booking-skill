import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.appointments': [
			'can-hold-time','can-cancel-hold','can-book-appointment','can-create-appointment','can-list-appointments','can-list-appointments-for-others','can-update-appointment',
		]
		'appointments.management': [
			'can-configure-people-capabilities','can-configure-role-capabilities','can-register-capabilities',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
	}
}


export interface PermissionContractMap {}