import { Component } from '@angular/core';
import { BaseIonContentComponent } from '../../shared-components/base-ion-content/base-ion-content.component';

@Component({
  selector: 'app-permissions-display',
  templateUrl: './permissions-display.component.html',
  styleUrls: ['./permissions-display.component.scss'],
  standalone: true,
  imports: [BaseIonContentComponent],
})
export class PermissionsDisplayComponent {}
