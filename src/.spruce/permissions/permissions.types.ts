import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.appointments': [
			'can-hold-time','can-cancel-hold','can-book-appointment','can-create-appointment','can-list-appointments','can-list-appointments-for-others','can-update-appointment','can-listen-to-did-book',
		]
		'appointments.management': [
			'can-configure-people-capabilities','can-configure-role-capabilities','can-register-capabilities',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
	}
}


export interface PermissionContractMap {}