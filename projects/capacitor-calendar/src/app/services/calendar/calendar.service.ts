import { Injectable } from '@angular/core';
import {
  CapacitorCalendar,
  PluginPermission,
} from '@ebarooni/capacitor-calendar';
import { StoreService } from '../store/store.service';

@Injectable()
export class CalendarService {
  constructor(private readonly storeService: StoreService) {}

  checkPermission(permission: PluginPermission) {
    this.collectResults(() =>
      CapacitorCalendar.checkPermission({ alias: permission }),
    );
  }

  requestWriteOnlyCalendarAccess(): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestWriteOnlyCalendarAccess()
        .then((result) => {
          this.storeService.setPermissionsState({
            [PluginPermission.WRITE_CALENDAR]: result.result,
          });
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  requestReadOnlyCalendarAccess(): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestReadOnlyCalendarAccess()
        .then((result) => {
          this.storeService.setPermissionsState({
            [PluginPermission.READ_CALENDAR]: result.result,
          });
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  requestFullCalendarAccess(): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestFullCalendarAccess()
        .then((result) => {
          this.storeService.setPermissionsState({
            [PluginPermission.WRITE_CALENDAR]: result.result,
            [PluginPermission.READ_CALENDAR]: result.result,
          });
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  requestFullRemindersAccess(): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestFullRemindersAccess()
        .then((result) => {
          this.storeService.setPermissionsState({
            [PluginPermission.WRITE_REMINDERS]: result.result,
            [PluginPermission.READ_REMINDERS]: result.result,
          });
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  checkAllPermissions(): void {
    this.collectResults(() => {
      return CapacitorCalendar.checkAllPermissions()
        .then((result) => {
          this.storeService.setPermissionsState(result);
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  requestPermission(permission: PluginPermission): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestPermission({ alias: permission })
        .then((result) => {
          this.storeService.setPermissionsState({
            [permission]: result.result,
          });
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  requestAllPermissions(): void {
    this.collectResults(() => {
      return CapacitorCalendar.requestAllPermissions()
        .then((result) => {
          this.storeService.setPermissionsState(result);
          return result;
        })
        .catch((error) => {
          throw error;
        });
    });
  }

  private collectResults(handler: () => Promise<unknown>): void {
    handler()
      .then((results) => this.storeService.addLog(JSON.stringify(results)))
      .catch((error) => this.storeService.addLog(JSON.stringify(error)));
  }
}
