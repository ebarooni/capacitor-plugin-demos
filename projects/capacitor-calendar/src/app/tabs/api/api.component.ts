import { Component } from '@angular/core';
import {
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
import { ThemeService } from '../../services/theme/theme.service';
import { MethodsListComponent } from './methods-list/methods-list.component';

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
  ],
  standalone: true,
})
export class ApiComponent {
  readonly availablePlatforms = <PlatformFilter[]>['All', 'iOS', 'Android'];

  constructor(
    readonly storeService: StoreService,
    readonly themeService: ThemeService,
  ) {}
}
