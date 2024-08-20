import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { BaseIonListComponent } from '../../shared-components/base-ion-list/base-ion-list.component';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    BaseIonListComponent,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class LogsComponent {}
