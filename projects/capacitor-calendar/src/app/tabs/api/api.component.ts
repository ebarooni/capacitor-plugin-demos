import { Component } from '@angular/core';
import {
  IonChip,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  imports: [IonHeader, IonContent, IonToolbar, IonTitle, IonSearchbar, IonChip],
  standalone: true,
})
export class ApiComponent {
  readonly filters = ['All', 'iOS', 'Android'];
}
