import { Component } from '@angular/core';
import {
  IonAvatar,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';
import {
  PlatformFilter,
  StoreService,
} from '../../services/store/store.service';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonSearchbar,
    IonChip,
    IonGrid,
    IonList,
    IonRow,
    IonCol,
    IonItem,
    IonAvatar,
    IonLabel,
    IonText,
    IonNote,
    NgOptimizedImage,
    LetDirective,
  ],
  standalone: true,
})
export class ApiComponent {
  readonly availablePlatforms = <PlatformFilter[]>['All', 'iOS', 'Android'];

  constructor(readonly storeService: StoreService) {}
}
