import { Component } from '@angular/core';
import { IonItem, IonLabel, IonNote, IonText } from '@ionic/angular/standalone';
import { LetDirective } from '@ngrx/component';
import { NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theme/theme.service';
import { BaseIonListComponent } from '../base-ion-list/base-ion-list.component';

@Component({
  selector: 'app-avatar-banner',
  templateUrl: './avatar-banner.component.html',
  imports: [
    IonItem,
    IonLabel,
    IonNote,
    IonText,
    LetDirective,
    NgOptimizedImage,
    BaseIonListComponent,
  ],
  standalone: true,
})
export class AvatarBannerComponent {
  constructor(readonly themeService: ThemeService) {}
}
