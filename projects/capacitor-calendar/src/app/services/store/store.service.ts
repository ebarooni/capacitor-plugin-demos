import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export type PlatformFilter = 'All' | 'iOS' | 'Android';

export interface AppState {
  platformFilter: PlatformFilter;
  logs: string[];
  unreadLogs: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ComponentStore<AppState> {
  constructor() {
    super();
  }

  init(): void {
    this.setState({ platformFilter: 'All', logs: [], unreadLogs: 0 });
  }

  readonly platformFilter$: Observable<PlatformFilter> = this.select(
    (state) => state.platformFilter,
  );

  readonly setPlatformFilter = this.updater(
    (state, platform: PlatformFilter) => ({
      ...state,
      platformFilter: platform,
    }),
  );

  readonly addLog = this.updater((state, log: string) => ({
    ...state,
    unreadLogs: state.unreadLogs + 1,
    logs: [...state.logs, log],
  }));
}
