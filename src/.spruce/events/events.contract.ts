import { coreEventContracts } from '@sprucelabs/mercury-core-events'
import appointmentsBookEventContract_v2021_06_23, {
	BookEventContract as AppointmentsBookEventContract_v2021_06_23,
} from '#spruce/events/appointments/book.v2021_06_23.contract'
import appointmentsCancelHoldEventContract_v2021_06_23, {
	CancelHoldEventContract as AppointmentsCancelHoldEventContract_v2021_06_23,
} from '#spruce/events/appointments/cancelHold.v2021_06_23.contract'
import appointmentsCreateEventContract_v2021_06_23, {
	CreateEventContract as AppointmentsCreateEventContract_v2021_06_23,
} from '#spruce/events/appointments/create.v2021_06_23.contract'
import appointmentsCreateCategoryEventContract_v2021_06_23, {
	CreateCategoryEventContract as AppointmentsCreateCategoryEventContract_v2021_06_23,
} from '#spruce/events/appointments/createCategory.v2021_06_23.contract'
import appointmentsCreateHoldEventContract_v2021_06_23, {
	CreateHoldEventContract as AppointmentsCreateHoldEventContract_v2021_06_23,
} from '#spruce/events/appointments/createHold.v2021_06_23.contract'
import appointmentsCreatePersonCapabilityEventContract_v2021_06_23, {
	CreatePersonCapabilityEventContract as AppointmentsCreatePersonCapabilityEventContract_v2021_06_23,
} from '#spruce/events/appointments/createPersonCapability.v2021_06_23.contract'
import appointmentsCreateRoleCapabilityEventContract_v2021_06_23, {
	CreateRoleCapabilityEventContract as AppointmentsCreateRoleCapabilityEventContract_v2021_06_23,
} from '#spruce/events/appointments/createRoleCapability.v2021_06_23.contract'
import appointmentsCreateServiceEventContract_v2021_06_23, {
	CreateServiceEventContract as AppointmentsCreateServiceEventContract_v2021_06_23,
} from '#spruce/events/appointments/createService.v2021_06_23.contract'
import appointmentsDeleteCategoryEventContract_v2021_06_23, {
	DeleteCategoryEventContract as AppointmentsDeleteCategoryEventContract_v2021_06_23,
} from '#spruce/events/appointments/deleteCategory.v2021_06_23.contract'
import appointmentsDeleteServiceEventContract_v2021_06_23, {
	DeleteServiceEventContract as AppointmentsDeleteServiceEventContract_v2021_06_23,
} from '#spruce/events/appointments/deleteService.v2021_06_23.contract'
import appointmentsDidBookEventContract_v2021_06_23, {
	DidBookEventContract as AppointmentsDidBookEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBook.v2021_06_23.contract'
import appointmentsDidUpdateEventContract_v2021_06_23, {
	DidUpdateEventContract as AppointmentsDidUpdateEventContract_v2021_06_23,
} from '#spruce/events/appointments/didUpdate.v2021_06_23.contract'
import appointmentsGetEventContract_v2021_06_23, {
	GetEventContract as AppointmentsGetEventContract_v2021_06_23,
} from '#spruce/events/appointments/get.v2021_06_23.contract'
import appointmentsGetAvailableTimesEventContract_v2021_06_23, {
	GetAvailableTimesEventContract as AppointmentsGetAvailableTimesEventContract_v2021_06_23,
} from '#spruce/events/appointments/getAvailableTimes.v2021_06_23.contract'
import appointmentsGetCategoryEventContract_v2021_06_23, {
	GetCategoryEventContract as AppointmentsGetCategoryEventContract_v2021_06_23,
} from '#spruce/events/appointments/getCategory.v2021_06_23.contract'
import appointmentsGetOrganizationSettingsEventContract_v2021_06_23, {
	GetOrganizationSettingsEventContract as AppointmentsGetOrganizationSettingsEventContract_v2021_06_23,
} from '#spruce/events/appointments/getOrganizationSettings.v2021_06_23.contract'
import appointmentsGetServiceEventContract_v2021_06_23, {
	GetServiceEventContract as AppointmentsGetServiceEventContract_v2021_06_23,
} from '#spruce/events/appointments/getService.v2021_06_23.contract'
import appointmentsListEventContract_v2021_06_23, {
	ListEventContract as AppointmentsListEventContract_v2021_06_23,
} from '#spruce/events/appointments/list.v2021_06_23.contract'
import appointmentsListBookedServicesEventContract_v2021_06_23, {
	ListBookedServicesEventContract as AppointmentsListBookedServicesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listBookedServices.v2021_06_23.contract'
import appointmentsListCategoriesEventContract_v2021_06_23, {
	ListCategoriesEventContract as AppointmentsListCategoriesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listCategories.v2021_06_23.contract'
import appointmentsListPeopleCapabilitiesEventContract_v2021_06_23, {
	ListPeopleCapabilitiesEventContract as AppointmentsListPeopleCapabilitiesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listPeopleCapabilities.v2021_06_23.contract'
import appointmentsListRoleCapabilitiesEventContract_v2021_06_23, {
	ListRoleCapabilitiesEventContract as AppointmentsListRoleCapabilitiesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listRoleCapabilities.v2021_06_23.contract'
import appointmentsListServicesEventContract_v2021_06_23, {
	ListServicesEventContract as AppointmentsListServicesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listServices.v2021_06_23.contract'
import appointmentsListServicesWithProvidersEventContract_v2021_06_23, {
	ListServicesWithProvidersEventContract as AppointmentsListServicesWithProvidersEventContract_v2021_06_23,
} from '#spruce/events/appointments/listServicesWithProviders.v2021_06_23.contract'
import appointmentsListStatusesEventContract_v2021_06_23, {
	ListStatusesEventContract as AppointmentsListStatusesEventContract_v2021_06_23,
} from '#spruce/events/appointments/listStatuses.v2021_06_23.contract'
import appointmentsRegisterCapabilitiesEventContract_v2021_06_23, {
	RegisterCapabilitiesEventContract as AppointmentsRegisterCapabilitiesEventContract_v2021_06_23,
} from '#spruce/events/appointments/registerCapabilities.v2021_06_23.contract'
import appointmentsSyncStatusesEventContract_v2021_06_23, {
	SyncStatusesEventContract as AppointmentsSyncStatusesEventContract_v2021_06_23,
} from '#spruce/events/appointments/syncStatuses.v2021_06_23.contract'
import appointmentsUpdateEventContract_v2021_06_23, {
	UpdateEventContract as AppointmentsUpdateEventContract_v2021_06_23,
} from '#spruce/events/appointments/update.v2021_06_23.contract'
import appointmentsUpdateCategoryEventContract_v2021_06_23, {
	UpdateCategoryEventContract as AppointmentsUpdateCategoryEventContract_v2021_06_23,
} from '#spruce/events/appointments/updateCategory.v2021_06_23.contract'
import appointmentsUpdateOrganizationSettingsEventContract_v2021_06_23, {
	UpdateOrganizationSettingsEventContract as AppointmentsUpdateOrganizationSettingsEventContract_v2021_06_23,
} from '#spruce/events/appointments/updateOrganizationSettings.v2021_06_23.contract'
import appointmentsUpdatePersonCapabilityEventContract_v2021_06_23, {
	UpdatePersonCapabilityEventContract as AppointmentsUpdatePersonCapabilityEventContract_v2021_06_23,
} from '#spruce/events/appointments/updatePersonCapability.v2021_06_23.contract'
import appointmentsUpdateRoleCapabilityEventContract_v2021_06_23, {
	UpdateRoleCapabilityEventContract as AppointmentsUpdateRoleCapabilityEventContract_v2021_06_23,
} from '#spruce/events/appointments/updateRoleCapability.v2021_06_23.contract'
import appointmentsUpdateServiceEventContract_v2021_06_23, {
	UpdateServiceEventContract as AppointmentsUpdateServiceEventContract_v2021_06_23,
} from '#spruce/events/appointments/updateService.v2021_06_23.contract'
import appointmentsWillSendConfirmationEventContract_v2021_06_23, {
	WillSendConfirmationEventContract as AppointmentsWillSendConfirmationEventContract_v2021_06_23,
} from '#spruce/events/appointments/willSendConfirmation.v2021_06_23.contract'

export default [
	appointmentsBookEventContract_v2021_06_23,
	appointmentsCancelHoldEventContract_v2021_06_23,
	appointmentsCreateEventContract_v2021_06_23,
	appointmentsCreateCategoryEventContract_v2021_06_23,
	appointmentsCreateHoldEventContract_v2021_06_23,
	appointmentsCreatePersonCapabilityEventContract_v2021_06_23,
	appointmentsCreateRoleCapabilityEventContract_v2021_06_23,
	appointmentsCreateServiceEventContract_v2021_06_23,
	appointmentsDeleteCategoryEventContract_v2021_06_23,
	appointmentsDeleteServiceEventContract_v2021_06_23,
	appointmentsDidBookEventContract_v2021_06_23,
	appointmentsDidUpdateEventContract_v2021_06_23,
	appointmentsGetEventContract_v2021_06_23,
	appointmentsGetAvailableTimesEventContract_v2021_06_23,
	appointmentsGetCategoryEventContract_v2021_06_23,
	appointmentsGetOrganizationSettingsEventContract_v2021_06_23,
	appointmentsGetServiceEventContract_v2021_06_23,
	appointmentsListEventContract_v2021_06_23,
	appointmentsListBookedServicesEventContract_v2021_06_23,
	appointmentsListCategoriesEventContract_v2021_06_23,
	appointmentsListPeopleCapabilitiesEventContract_v2021_06_23,
	appointmentsListRoleCapabilitiesEventContract_v2021_06_23,
	appointmentsListServicesEventContract_v2021_06_23,
	appointmentsListServicesWithProvidersEventContract_v2021_06_23,
	appointmentsListStatusesEventContract_v2021_06_23,
	appointmentsRegisterCapabilitiesEventContract_v2021_06_23,
	appointmentsSyncStatusesEventContract_v2021_06_23,
	appointmentsUpdateEventContract_v2021_06_23,
	appointmentsUpdateCategoryEventContract_v2021_06_23,
	appointmentsUpdateOrganizationSettingsEventContract_v2021_06_23,
	appointmentsUpdatePersonCapabilityEventContract_v2021_06_23,
	appointmentsUpdateRoleCapabilityEventContract_v2021_06_23,
	appointmentsUpdateServiceEventContract_v2021_06_23,
	appointmentsWillSendConfirmationEventContract_v2021_06_23,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.book::v2021_06_23': AppointmentsBookEventContract_v2021_06_23['eventSignatures']['appointments.book::v2021_06_23']

		'appointments.cancel-hold::v2021_06_23': AppointmentsCancelHoldEventContract_v2021_06_23['eventSignatures']['appointments.cancel-hold::v2021_06_23']

		'appointments.create::v2021_06_23': AppointmentsCreateEventContract_v2021_06_23['eventSignatures']['appointments.create::v2021_06_23']

		'appointments.create-category::v2021_06_23': AppointmentsCreateCategoryEventContract_v2021_06_23['eventSignatures']['appointments.create-category::v2021_06_23']

		'appointments.create-hold::v2021_06_23': AppointmentsCreateHoldEventContract_v2021_06_23['eventSignatures']['appointments.create-hold::v2021_06_23']

		'appointments.create-person-capability::v2021_06_23': AppointmentsCreatePersonCapabilityEventContract_v2021_06_23['eventSignatures']['appointments.create-person-capability::v2021_06_23']

		'appointments.create-role-capability::v2021_06_23': AppointmentsCreateRoleCapabilityEventContract_v2021_06_23['eventSignatures']['appointments.create-role-capability::v2021_06_23']

		'appointments.create-service::v2021_06_23': AppointmentsCreateServiceEventContract_v2021_06_23['eventSignatures']['appointments.create-service::v2021_06_23']

		'appointments.delete-category::v2021_06_23': AppointmentsDeleteCategoryEventContract_v2021_06_23['eventSignatures']['appointments.delete-category::v2021_06_23']

		'appointments.delete-service::v2021_06_23': AppointmentsDeleteServiceEventContract_v2021_06_23['eventSignatures']['appointments.delete-service::v2021_06_23']

		'appointments.did-book::v2021_06_23': AppointmentsDidBookEventContract_v2021_06_23['eventSignatures']['appointments.did-book::v2021_06_23']

		'appointments.did-update::v2021_06_23': AppointmentsDidUpdateEventContract_v2021_06_23['eventSignatures']['appointments.did-update::v2021_06_23']

		'appointments.get::v2021_06_23': AppointmentsGetEventContract_v2021_06_23['eventSignatures']['appointments.get::v2021_06_23']

		'appointments.get-available-times::v2021_06_23': AppointmentsGetAvailableTimesEventContract_v2021_06_23['eventSignatures']['appointments.get-available-times::v2021_06_23']

		'appointments.get-category::v2021_06_23': AppointmentsGetCategoryEventContract_v2021_06_23['eventSignatures']['appointments.get-category::v2021_06_23']

		'appointments.get-organization-settings::v2021_06_23': AppointmentsGetOrganizationSettingsEventContract_v2021_06_23['eventSignatures']['appointments.get-organization-settings::v2021_06_23']

		'appointments.get-service::v2021_06_23': AppointmentsGetServiceEventContract_v2021_06_23['eventSignatures']['appointments.get-service::v2021_06_23']

		'appointments.list::v2021_06_23': AppointmentsListEventContract_v2021_06_23['eventSignatures']['appointments.list::v2021_06_23']

		'appointments.list-booked-services::v2021_06_23': AppointmentsListBookedServicesEventContract_v2021_06_23['eventSignatures']['appointments.list-booked-services::v2021_06_23']

		'appointments.list-categories::v2021_06_23': AppointmentsListCategoriesEventContract_v2021_06_23['eventSignatures']['appointments.list-categories::v2021_06_23']

		'appointments.list-people-capabilities::v2021_06_23': AppointmentsListPeopleCapabilitiesEventContract_v2021_06_23['eventSignatures']['appointments.list-people-capabilities::v2021_06_23']

		'appointments.list-role-capabilities::v2021_06_23': AppointmentsListRoleCapabilitiesEventContract_v2021_06_23['eventSignatures']['appointments.list-role-capabilities::v2021_06_23']

		'appointments.list-services::v2021_06_23': AppointmentsListServicesEventContract_v2021_06_23['eventSignatures']['appointments.list-services::v2021_06_23']

		'appointments.list-services-with-providers::v2021_06_23': AppointmentsListServicesWithProvidersEventContract_v2021_06_23['eventSignatures']['appointments.list-services-with-providers::v2021_06_23']

		'appointments.list-statuses::v2021_06_23': AppointmentsListStatusesEventContract_v2021_06_23['eventSignatures']['appointments.list-statuses::v2021_06_23']

		'appointments.register-capabilities::v2021_06_23': AppointmentsRegisterCapabilitiesEventContract_v2021_06_23['eventSignatures']['appointments.register-capabilities::v2021_06_23']

		'appointments.sync-statuses::v2021_06_23': AppointmentsSyncStatusesEventContract_v2021_06_23['eventSignatures']['appointments.sync-statuses::v2021_06_23']

		'appointments.update::v2021_06_23': AppointmentsUpdateEventContract_v2021_06_23['eventSignatures']['appointments.update::v2021_06_23']

		'appointments.update-category::v2021_06_23': AppointmentsUpdateCategoryEventContract_v2021_06_23['eventSignatures']['appointments.update-category::v2021_06_23']

		'appointments.update-organization-settings::v2021_06_23': AppointmentsUpdateOrganizationSettingsEventContract_v2021_06_23['eventSignatures']['appointments.update-organization-settings::v2021_06_23']

		'appointments.update-person-capability::v2021_06_23': AppointmentsUpdatePersonCapabilityEventContract_v2021_06_23['eventSignatures']['appointments.update-person-capability::v2021_06_23']

		'appointments.update-role-capability::v2021_06_23': AppointmentsUpdateRoleCapabilityEventContract_v2021_06_23['eventSignatures']['appointments.update-role-capability::v2021_06_23']

		'appointments.update-service::v2021_06_23': AppointmentsUpdateServiceEventContract_v2021_06_23['eventSignatures']['appointments.update-service::v2021_06_23']

		'appointments.will-send-confirmation::v2021_06_23': AppointmentsWillSendConfirmationEventContract_v2021_06_23['eventSignatures']['appointments.will-send-confirmation::v2021_06_23']
	}
}
