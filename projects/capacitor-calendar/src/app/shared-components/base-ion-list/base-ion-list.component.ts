import { Component } from '@angular/core';
import { IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-base-ion-list',
  templateUrl: './base-ion-list.component.html',
  standalone: true,
  imports: [IonList],
})
export class BaseIonListComponent {}
