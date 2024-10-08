import { Component, inject, ViewChild, Input } from '@angular/core';
import { CalendarService } from '../../../services/calendar/calendar.service';
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonToolbar,
} from '@ionic/angular/standalone';
import {
  CalendarChooserDisplayStyle,
  CalendarChooserSelectionStyle,
  PluginPermission,
} from '@ebarooni/capacitor-calendar';
import { BaseIonListComponent } from '../../../shared-components/base-ion-list/base-ion-list.component';
import {
  FilterForPlatformPipe,
  MethodDetails,
} from './filter-for-platform/filter-for-platform.pipe';
import { PlatformFilter } from '../../../services/store/store.service';
import { CreateEventDialogComponent } from '../../../shared-components/create-event-dialog/create-event-dialog.component';
import { PermissionModalRole } from '../../../shared-types/permission-modal-role';
import { CreateEventParam } from '../../../shared-types/create-event-param';
import { PartialWithRequiredAndOptionalExcluded } from '../../../shared-types/partial-with-required-and-optional-excluded';
import { CreateReminderDialogComponent } from '../../../shared-components/create-reminder-dialog/create-reminder-dialog.component';
import { CreateReminderParam } from '../../../shared-types/create-reminder-param';
import { DateTimeComponent } from '../../../shared-components/date-time/date-time.component';
import { FilterForMethodPipe } from './filter-for-method/filter-for-method.pipe';

@Component({
  selector: 'app-methods-list',
  templateUrl: './methods-list.component.html',
  styleUrls: ['./methods-list.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonModal,
    IonToolbar,
    IonButtons,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    BaseIonListComponent,
    FilterForPlatformPipe,
    CreateEventDialogComponent,
    CreateReminderDialogComponent,
    DateTimeComponent,
    FilterForMethodPipe,
  ],
  providers: [CalendarService],
})
export class MethodsListComponent {
  readonly calendarService = inject(CalendarService);
  @Input() platform?: PlatformFilter;
  @Input() searchString?: string;
  @ViewChild('permissionsModal') readonly permissionsModal!: IonModal;
  @ViewChild('calendarOptionsModal') readonly calendarOptionsModal!: IonModal;
  @ViewChild('createEventDialogComponent')
  readonly createEventDialogComponent!: CreateEventDialogComponent;
  @ViewChild('createReminderDialogComponent')
  readonly createReminderDialogComponent!: CreateReminderDialogComponent;
  @ViewChild('dateTimeComponent')
  private readonly dateTimeComponent!: DateTimeComponent;
  readonly pluginPermissions: PluginPermission[] =
    Object.values(PluginPermission);
  readonly calendarSelectionStyleArr = Object.keys(
    CalendarChooserSelectionStyle,
  )
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      text: key,
      value:
        CalendarChooserSelectionStyle[
          key as keyof typeof CalendarChooserSelectionStyle
        ],
    }));
  readonly calendarDisplayStyleArr = Object.keys(CalendarChooserDisplayStyle)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      text: key,
      value:
        CalendarChooserDisplayStyle[
          key as keyof typeof CalendarChooserDisplayStyle
        ],
    }));
  readonly methodsArray: MethodDetails[] = [
    {
      name: this.calendarService.checkPermission.name,
      method: () =>
        this.permissionsModal
          .present()
          .then(() => this.permissionsModal.onDidDismiss<CustomEvent>())
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const permission = event.data as unknown as PluginPermission;
              if (permission) this.calendarService.checkPermission(permission);
            }
          }),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.checkAllPermissions.name,
      method: () => this.calendarService.checkAllPermissions(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.requestPermission.name,
      method: () =>
        this.permissionsModal
          .present()
          .then(() => this.permissionsModal.onDidDismiss<CustomEvent>())
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const permission = event.data as unknown as PluginPermission;
              if (permission)
                this.calendarService.requestPermission(permission);
            }
          }),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.requestWriteOnlyCalendarAccess.name,
      method: () => this.calendarService.requestWriteOnlyCalendarAccess(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.requestReadOnlyCalendarAccess.name,
      method: () => this.calendarService.requestReadOnlyCalendarAccess(),
      supportedPlatforms: ['android'],
    },
    {
      name: this.calendarService.requestFullCalendarAccess.name,
      method: () => this.calendarService.requestFullCalendarAccess(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.requestAllPermissions.name,
      method: () => this.calendarService.requestAllPermissions(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.requestFullRemindersAccess.name,
      method: () => this.calendarService.requestFullRemindersAccess(),
      supportedPlatforms: ['ios'],
    },
    {
      name: this.calendarService.createEventWithPrompt.name,
      method: () =>
        this.createEventDialogComponent
          .present()
          .then(() =>
            this.createEventDialogComponent.modal.onDidDismiss<CustomEvent>(),
          )
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const data = event.data as unknown as Partial<CreateEventParam>;
              if (data) this.calendarService.createEventWithPrompt(data);
            }
          }),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.selectCalendarsWithPrompt.name,
      method: () =>
        this.calendarOptionsModal
          .present()
          .then(() => this.calendarOptionsModal.onDidDismiss<CustomEvent>())
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const { style, display } = event.data as unknown as {
                style: CalendarChooserSelectionStyle;
                display: CalendarChooserDisplayStyle;
              };
              if (style >= 0 && display >= 0)
                this.calendarService.selectCalendarsWithPrompt(display, style);
            }
          }),
      supportedPlatforms: ['ios'],
    },
    {
      name: this.calendarService.listCalendars.name,
      method: () => this.calendarService.listCalendars(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.getDefaultCalendar.name,
      method: () => this.calendarService.getDefaultCalendar(),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.createEvent.name,
      method: () =>
        this.createEventDialogComponent
          .present()
          .then(() =>
            this.createEventDialogComponent.modal.onDidDismiss<CustomEvent>(),
          )
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const data =
                event.data as unknown as PartialWithRequiredAndOptionalExcluded<
                  CreateEventParam,
                  'title'
                >;
              if (data) this.calendarService.createEvent(data);
            }
          }),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.getDefaultRemindersList.name,
      method: () => this.calendarService.getDefaultRemindersList(),
      supportedPlatforms: ['ios'],
    },
    {
      name: this.calendarService.getRemindersLists.name,
      method: () => this.calendarService.getRemindersLists(),
      supportedPlatforms: ['ios'],
    },
    {
      name: this.calendarService.createReminder.name,
      method: () =>
        this.createReminderDialogComponent
          .present()
          .then(() =>
            this.createReminderDialogComponent.modal.onDidDismiss<CustomEvent>(),
          )
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const data =
                event.data as unknown as PartialWithRequiredAndOptionalExcluded<
                  CreateReminderParam,
                  'title'
                >;
              if (data) this.calendarService.createReminder(data);
            }
          }),
      supportedPlatforms: ['ios'],
    },
    {
      name: this.calendarService.openCalendar.name,
      method: () =>
        this.dateTimeComponent
          .present()
          .then(() =>
            this.dateTimeComponent.ionDatetime.onDidDismiss<CustomEvent>(),
          )
          .then((event) => {
            if (event.role === this.permissionModalRole.CONFIRM) {
              const data = event.data?.detail;
              if (data) this.calendarService.openCalendar(data.value);
            }
          }),
      supportedPlatforms: ['ios', 'android'],
    },
    {
      name: this.calendarService.openReminders.name,
      method: () => this.calendarService.openReminders(),
      supportedPlatforms: ['ios'],
    },
  ];

  get permissionModalRole(): typeof PermissionModalRole {
    return PermissionModalRole;
  }
}
