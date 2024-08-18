import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, IonContent],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
