import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AvatarBannerComponent } from '../../shared-components/avatar-banner/avatar-banner.component';
import { ThemeService } from '../../services/theme/theme.service';
import { LetDirective } from '@ngrx/component';
import { Browser, OpenOptions } from '@capacitor/browser';

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
    IonIcon,
    IonLabel,
  ],
})
export class SettingsComponent {
  constructor(readonly themeService: ThemeService) {}

  openLink(url: string): void {
    const openOptions: OpenOptions = { url: url };
    Browser.open(openOptions).catch(() =>
      console.warn('failed to open the given url'),
    );
  }
}
