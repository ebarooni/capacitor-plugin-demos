import { Component, ViewChild } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { BaseIonListComponent } from '../base-ion-list/base-ion-list.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  catchError,
  defer,
  from,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Calendar, CapacitorCalendar } from '@ebarooni/capacitor-calendar';
import { LetDirective } from '@ngrx/component';
import { NgStyle } from '@angular/common';
import { CalendarColorPipe } from './calendar-color.pipe';
import { PermissionModalRole } from '../../shared-types/permission-modal-role';
import { CreateEventParam } from '../../shared-types/create-event-param';
import { PartialWithRequiredAndOptionalExcluded } from '../../shared-types/partial-with-required-and-optional-excluded';

enum Alert {
  NONE = -1,
  TIME_OF_EVENT = 0,
  FIVE = 5,
  TEN = 10,
  FIFTEEN = 15,
  THIRTY = 30,
  HOUR = 60,
  TWO_HOURS = 120,
  DAY = 1440,
}

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    BaseIonListComponent,
    IonGrid,
    IonRow,
    IonCol,
    ReactiveFormsModule,
    IonToggle,
    IonLabel,
    IonDatetimeButton,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    LetDirective,
    NgStyle,
    CalendarColorPipe,
    IonTextarea,
  ],
})
export class CreateEventDialogComponent {
  @ViewChild('modal') modal!: IonModal;
  readonly eventDetailForm = new FormGroup({
    title: new FormControl<string>(''),
    location: new FormControl<string>(''),
    isAllDay: new FormControl<boolean>(false),
    startDate: new FormControl<string>(
      CreateEventDialogComponent.getCurrentIsoTimeInLocalTime(Date.now()),
    ),
    endDate: new FormControl<string>(
      CreateEventDialogComponent.getCurrentIsoTimeInLocalTime(
        Date.now() + 3600 * 1000,
      ),
    ),
    calendarId: new FormControl<string>(''),
    firstAlert: new FormControl<Alert>(Alert.NONE),
    secondAlert: new FormControl<Alert>(Alert.NONE),
    url: new FormControl<string>(''),
    notes: new FormControl<string>(''),
  });
  readonly calendars$: Observable<Calendar[]> = defer(() =>
    CapacitorCalendar.listCalendars(),
  ).pipe(
    catchError(() => of({ result: <Calendar[]>[] })),
    map(({ result }) => result),
    switchMap((calendars) =>
      from(CapacitorCalendar.getDefaultCalendar()).pipe(
        catchError(() => of({ result: {} as Calendar })),
        tap(({ result }) => {
          calendars.forEach((calendar) => {
            if (calendar.id === result?.id)
              this.eventDetailForm.patchValue({ calendarId: calendar.id });
          });
        }),
        map(() => calendars),
      ),
    ),
  );
  readonly alertsArray: number[] = Object.values(this.alert).filter((alert) =>
    Number.isInteger(alert),
  ) as number[];

  get alert(): typeof Alert {
    return Alert;
  }

  get permissionModalRole(): typeof PermissionModalRole {
    return PermissionModalRole;
  }

  present(): Promise<void> {
    return this.modal.present();
  }

  dismiss(
    role: PermissionModalRole,
    data?: PartialWithRequiredAndOptionalExcluded<CreateEventParam, 'title'>,
  ): Promise<boolean> {
    return this.modal.dismiss(data, role);
  }

  onAlertsChange(): void {
    const firstAlert = this.eventDetailForm.controls.firstAlert.value;
    const secondAlert = this.eventDetailForm.controls.secondAlert.value;
    if (
      firstAlert &&
      secondAlert &&
      secondAlert !== Alert.NONE &&
      secondAlert <= firstAlert
    ) {
      this.eventDetailForm.patchValue({
        firstAlert: secondAlert,
        secondAlert: firstAlert,
      });
    }
  }

  submit(event: SubmitEvent): void {
    event.preventDefault();
    const data = Object.keys(this.eventDetailForm.value).reduce<
      Partial<CreateEventParam>
    >(
      (acc: any, curr: any) => {
        // @ts-ignore
        const row = this.eventDetailForm.value[curr];
        if (curr === 'firstAlert' || curr === 'secondAlert') {
          if (row >= 0) {
            if (acc['alertOffsetInMinutes']) {
              acc['alertOffsetInMinutes'] = [
                ...acc['alertOffsetInMinutes'],
                row,
              ];
            } else {
              acc['alertOffsetInMinutes'] = [row];
            }
          }
        } else if (curr === 'startDate' || curr === 'endDate') {
          const date = Date.parse(row);
          if (date) acc[curr] = date;
        } else {
          if (row) acc[curr] = row;
        }
        return acc;
      },
      {} as PartialWithRequiredAndOptionalExcluded<CreateEventParam, 'title'>,
    ) as PartialWithRequiredAndOptionalExcluded<CreateEventParam, 'title'>;
    this.eventDetailForm.reset();
    void this.dismiss(this.permissionModalRole.CONFIRM, data);
  }

  static getCurrentIsoTimeInLocalTime(timestamp: number): string {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(timestamp - timezoneOffset).toISOString().slice(0, -1);
  }
}
