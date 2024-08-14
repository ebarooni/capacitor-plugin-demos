import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from './services/theme/theme.service';
import { LetDirective } from '@ngrx/component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, LetDirective],
  templateUrl: './app.component.html',
  providers: [ThemeService],
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);
  readonly isDarkMode$ = this.themeService.isDarkMode$.pipe(
    tap((isDarkMode) => document.body.classList.toggle('dark', isDarkMode)),
  );
}
