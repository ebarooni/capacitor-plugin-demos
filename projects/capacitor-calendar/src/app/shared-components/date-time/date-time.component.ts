import { Component, ViewChild } from '@angular/core';
import { IonDatetime, IonPopover } from '@ionic/angular/standalone';
import { PermissionModalRole } from '../../shared-types/permission-modal-role';
import { map, of } from 'rxjs';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  standalone: true,
  imports: [IonDatetime, IonPopover, LetDirective],
})
export class DateTimeComponent {
  @ViewChild('ionDatetime') readonly ionDatetime!: IonPopover;
  readonly time$ = of(Date.now()).pipe(
    map((date) => DateTimeComponent.getCurrentIsoTimeInLocalTime(date)),
  );

  get permissionModalRole(): typeof PermissionModalRole {
    return PermissionModalRole;
  }

  parseDate(event: CustomEvent): CustomEvent {
    event.detail.value = Date.parse(event.detail.value);
    return event;
  }

  present(): Promise<void> {
    return this.ionDatetime.present();
  }

  static getCurrentIsoTimeInLocalTime(timestamp: number): string {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(timestamp - timezoneOffset).toISOString().slice(0, -1);
  }
}
