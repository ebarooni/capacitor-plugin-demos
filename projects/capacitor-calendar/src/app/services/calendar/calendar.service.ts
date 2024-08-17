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

  private collectResults(handler: () => Promise<unknown>): void {
    handler()
      .then((results) => this.storeService.addLog(JSON.stringify(results)))
      .catch((error) => this.storeService.addLog(JSON.stringify(error)));
  }
}
