import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AvatarBannerComponent } from '../../shared-components/avatar-banner/avatar-banner.component';
import { ThemeService } from '../../services/theme/theme.service';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    AvatarBannerComponent,
    IonList,
    IonItem,
    IonToggle,
    LetDirective,
  ],
})
export class SettingsComponent {
  constructor(readonly themeService: ThemeService) {}
}
