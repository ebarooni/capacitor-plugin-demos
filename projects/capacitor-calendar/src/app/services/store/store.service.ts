import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { PluginPermission } from '@ebarooni/capacitor-calendar';
import { PermissionState } from '@capacitor/core';

export type PlatformFilter = 'All' | 'iOS' | 'Android';

export interface AppState {
  platformFilter: PlatformFilter;
  logs: string[];
  unreadLogs: number;
  permissionsState: {
    [PluginPermission.WRITE_CALENDAR]: PermissionState;
    [PluginPermission.READ_CALENDAR]: PermissionState;
    [PluginPermission.WRITE_REMINDERS]: PermissionState;
    [PluginPermission.READ_REMINDERS]: PermissionState;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ComponentStore<AppState> {
  constructor() {
    super();
  }

  init(): void {
    this.setState({
      platformFilter: 'All',
      logs: [],
      unreadLogs: 0,
      permissionsState: {
        [PluginPermission.WRITE_CALENDAR]: 'prompt',
        [PluginPermission.READ_CALENDAR]: 'prompt',
        [PluginPermission.WRITE_REMINDERS]: 'prompt',
        [PluginPermission.READ_REMINDERS]: 'prompt',
      },
    });
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

  readonly unreadLogs$ = this.select((state) => state.unreadLogs);

  readonly permissionsState$: Observable<AppState['permissionsState']> =
    this.select((state) => state.permissionsState);
}
