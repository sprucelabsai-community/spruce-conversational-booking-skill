import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'appointments.management': [
			'can-configure-people-capabilities','can-configure-role-capabilities','can-register-capabilities',
		]
		'appointments.appointments': [
			'can-hold-time','can-cancel-hold','can-book-appointment','can-create-appointment','can-list-appointments','can-list-appointments-for-others','can-update-appointment','can-listen-to-did-book',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
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
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
	}
}


export interface PermissionContractMap {}