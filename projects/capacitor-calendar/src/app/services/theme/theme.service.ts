import { Injectable } from '@angular/core';
import { fromEvent, map, merge, shareReplay, startWith, Subject } from 'rxjs';

@Injectable()
export class ThemeService {
  private readonly manualIsDarkModeSubject = new Subject<boolean>();
  readonly isDarkMode$ = merge(
    fromEvent<MediaQueryListEvent>(
      window.matchMedia('(prefers-color-scheme: dark)'),
      'change',
    ).pipe(
      startWith(window.matchMedia('(prefers-color-scheme: dark)')),
      map((event) => event.matches),
    ),
    this.manualIsDarkModeSubject,
  ).pipe(shareReplay(1));

  enableDarkMode(enable: boolean): void {
    this.manualIsDarkModeSubject.next(enable);
  }
}
