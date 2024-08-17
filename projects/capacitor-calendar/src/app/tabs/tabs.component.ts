import { Component } from '@angular/core';
import {
  IonBadge,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { StoreService } from '../services/store/store.service';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    LetDirective,
    IonBadge,
  ],
})
export class TabsComponent {
  constructor(readonly storeService: StoreService) {}
}
