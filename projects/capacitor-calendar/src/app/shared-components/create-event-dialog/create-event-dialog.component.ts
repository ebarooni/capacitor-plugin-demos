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

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
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
    url: new FormControl<string>(''),
    description: new FormControl<string>(''),
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

  present(): Promise<void> {
    return this.modal.present();
  }

  dismiss(): Promise<boolean> {
    return this.modal.dismiss();
  }

  static getCurrentIsoTimeInLocalTime(timestamp: number): string {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(timestamp - timezoneOffset).toISOString().slice(0, -1);
  }
}
