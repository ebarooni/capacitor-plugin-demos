import { Injectable } from '@angular/core';
import { fromEvent, map, shareReplay, startWith } from 'rxjs';

@Injectable()
export class ThemeService {
  readonly isDarkMode$ = fromEvent<MediaQueryListEvent>(
    window.matchMedia('(prefers-color-scheme: dark)'),
    'change',
  ).pipe(
    startWith(window.matchMedia('(prefers-color-scheme: dark)')),
    map((event) => event.matches),
    shareReplay(1),
  );
}
