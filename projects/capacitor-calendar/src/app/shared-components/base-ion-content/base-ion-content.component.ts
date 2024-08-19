import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-base-ion-content',
  templateUrl: './base-ion-content.component.html',
  imports: [IonContent],
  standalone: true,
})
export class BaseIonContentComponent {}
