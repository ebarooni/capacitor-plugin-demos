import { Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
} from '@ionic/angular/standalone';
import { LetDirective } from '@ngrx/component';
import { NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-avatar-banner',
  templateUrl: './avatar-banner.component.html',
  imports: [
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonText,
    LetDirective,
    NgOptimizedImage,
  ],
  standalone: true,
})
export class AvatarBannerComponent {
  constructor(readonly themeService: ThemeService) {}
}
