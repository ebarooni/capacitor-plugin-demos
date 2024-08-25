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
import { PluginPermission } from '@ebarooni/capacitor-calendar';
import { BaseIonListComponent } from '../../../shared-components/base-ion-list/base-ion-list.component';
import {
  FilterForPlatformPipe,
  MethodDetails,
} from './filter-for-platform/filter-for-platform.pipe';
import { PlatformFilter } from '../../../services/store/store.service';
import { CreateEventDialogComponent } from '../../../shared-components/create-event-dialog/create-event-dialog.component';
import { PermissionModalRole } from '../../../shared-types/permission-modal-role';
import { CreateEventParam } from '../../../shared-types/create-event-param';

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
  ],
  providers: [CalendarService],
})
export class MethodsListComponent {
  readonly calendarService = inject(CalendarService);
  @Input() platform?: PlatformFilter;
  @ViewChild('permissionsModal') readonly permissionsModal!: IonModal;
  @ViewChild('createEventDialogComponent')
  readonly createEventDialogComponent!: CreateEventDialogComponent;
  readonly pluginPermissions: PluginPermission[] =
    Object.values(PluginPermission);
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
  ];

  get permissionModalRole(): typeof PermissionModalRole {
    return PermissionModalRole;
  }
}
