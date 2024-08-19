import { Component } from '@angular/core';
import { CalendarService } from '../../../services/calendar/calendar.service';
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonNote,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PluginPermission } from '@ebarooni/capacitor-calendar';
import { BaseIonListComponent } from '../../../shared-components/base-ion-list/base-ion-list.component';

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
    IonNote,
    IonText,
    IonModal,
    IonToolbar,
    IonButtons,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    BaseIonListComponent,
  ],
  providers: [CalendarService],
})
export class MethodsListComponent {
  readonly pluginPermissions: PluginPermission[] =
    Object.values(PluginPermission);

  constructor(readonly calendarService: CalendarService) {}

  onPermissionsModalDismiss(event: CustomEvent): void {
    const permission = event.detail.data;
    if (permission) this.calendarService.checkPermission(permission);
  }
}
