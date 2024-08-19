import { Component } from '@angular/core';
import {
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
import { MethodsListComponent } from './methods-list/methods-list.component';
import { AvatarBannerComponent } from '../../shared-components/avatar-banner/avatar-banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
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
    IonLabel,
    IonText,
    IonNote,
    NgOptimizedImage,
    LetDirective,
    MethodsListComponent,
    AvatarBannerComponent,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
  ],
  standalone: true,
})
export class ApiComponent {
  readonly availablePlatforms = <PlatformFilter[]>['All', 'iOS', 'Android'];

  constructor(readonly storeService: StoreService) {}
}
