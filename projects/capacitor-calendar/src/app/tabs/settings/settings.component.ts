import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AvatarBannerComponent } from '../../shared-components/avatar-banner/avatar-banner.component';
import { ThemeService } from '../../services/theme/theme.service';
import { LetDirective } from '@ngrx/component';
import { Browser, OpenOptions } from '@capacitor/browser';
import { catchError, from, map, of } from 'rxjs';
import { App, AppInfo } from '@capacitor/app';
import { RouterLink } from '@angular/router';
import { BaseIonListComponent } from '../../shared-components/base-ion-list/base-ion-list.component';

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
    IonItem,
    IonToggle,
    LetDirective,
    IonIcon,
    IonLabel,
    RouterLink,
    BaseIonListComponent,
  ],
})
export class SettingsComponent {
  readonly appVersion$ = from(App.getInfo()).pipe(
    catchError(() => of({ version: '0.0.0' } as AppInfo)),
    map((state) => state.version),
    map((version) => `v${version}`),
  );

  constructor(readonly themeService: ThemeService) {}

  openLink(url: string): void {
    const openOptions: OpenOptions = { url: url };
    Browser.open(openOptions).catch(() =>
      console.warn('failed to open the given url'),
    );
  }
}
