import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonListHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { BaseIonListComponent } from '../../shared-components/base-ion-list/base-ion-list.component';
import { StoreService } from '../../services/store/store.service';
import { LetDirective } from '@ngrx/component';
import { PluginPermission } from '@ebarooni/capacitor-calendar';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
  selector: 'app-permissions-display',
  templateUrl: './permissions-display.component.html',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    BaseIonListComponent,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonListHeader,
    IonLabel,
    IonButtons,
    IonBackButton,
    LetDirective,
    IonChip,
    IonButton,
    IonIcon,
  ],
  providers: [CalendarService],
})
export class PermissionsDisplayComponent {
  readonly permissions = Object.values(PluginPermission);

  constructor(
    readonly storeService: StoreService,
    readonly calendarService: CalendarService,
  ) {}
}
