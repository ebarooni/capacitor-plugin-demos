import { Injectable } from '@angular/core';
import {
  fromEvent,
  map,
  merge,
  Observable,
  shareReplay,
  startWith,
  Subject,
} from 'rxjs';

@Injectable()
export class ThemeService {
  private readonly manualIsDarkModeSubject = new Subject<MediaQueryList>();
  readonly isDarkMode$: Observable<boolean> = merge(
    fromEvent<MediaQueryListEvent>(
      window.matchMedia('(prefers-color-scheme: dark)'),
      'change',
    ),
    this.manualIsDarkModeSubject,
  ).pipe(
    startWith(window.matchMedia('(prefers-color-scheme: dark)')),
    map((event) => event.matches),
    shareReplay(1),
  );

  enableDarkMode(enable: boolean): void {
    this.manualIsDarkModeSubject.next({ matches: enable } as MediaQueryList);
  }
}
