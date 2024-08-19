import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-permissions-display',
  templateUrl: './permissions-display.component.html',
  styleUrls: ['./permissions-display.component.scss'],
  standalone: true,
  imports: [IonContent],
})
export class PermissionsDisplayComponent {}
