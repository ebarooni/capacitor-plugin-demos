import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
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
  ],
})
export class LogsComponent implements ViewDidEnter {
  constructor(readonly storeService: StoreService) {}

  ionViewDidEnter() {
    this.storeService.setUnreadLogs(0);
  }
}
