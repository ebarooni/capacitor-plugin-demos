import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export type PlatformFilter = 'All' | 'iOS' | 'Android';

export interface AppState {
  platformFilter: PlatformFilter;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ComponentStore<AppState> {
  constructor() {
    super();
  }

  init(): void {
    this.setState({ platformFilter: 'All' });
  }

  readonly platformFilter$: Observable<PlatformFilter> = this.select(
    (state) => state.platformFilter,
  );

  readonly setPlatformFilter = this.updater(
    (state, platform: PlatformFilter) => ({
      platformFilter: platform,
    }),
  );
}
