import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
  IonTitle,
  IonToolbar,
  ViewDidEnter,
} from '@ionic/angular/standalone';
import { BaseIonListComponent } from '../../shared-components/base-ion-list/base-ion-list.component';
import { StoreService } from '../../services/store/store.service';
import { LetDirective } from '@ngrx/component';
import { DatePipe } from '@angular/common';

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
    IonLabel,
    LetDirective,
    IonNote,
    DatePipe,
    IonButtons,
    IonButton,
    IonIcon,
  ],
})
export class LogsComponent implements ViewDidEnter {
  constructor(readonly storeService: StoreService) {}

  ionViewDidEnter() {
    this.storeService.setUnreadLogs(0);
  }
}
