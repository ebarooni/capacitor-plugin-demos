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
  ],
  standalone: true,
})
export class ApiComponent {
  readonly filters = ['All', 'iOS', 'Android'];
}
