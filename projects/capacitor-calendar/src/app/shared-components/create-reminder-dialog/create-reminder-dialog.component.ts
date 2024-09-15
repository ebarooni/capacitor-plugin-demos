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
  IonRange,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseIonListComponent } from '../base-ion-list/base-ion-list.component';
import { CalendarColorPipe } from '../create-event-dialog/calendar-color.pipe';
import { PermissionModalRole } from '../../shared-types/permission-modal-role';
import { CreateEventParam } from '../../shared-types/create-event-param';
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
import {
  Calendar,
  CapacitorCalendar,
  RemindersList,
} from '@ebarooni/capacitor-calendar';
import { LetDirective } from '@ngrx/component';
import { NgStyle } from '@angular/common';
import { PartialWithRequiredAndOptionalExcluded } from '../../shared-types/partial-with-required-and-optional-excluded';
import { CreateReminderParam } from '../../shared-types/create-reminder-param';

@Component({
  selector: 'app-create-reminder-dialog',
  templateUrl: './create-reminder-dialog.component.html',
  styleUrls: ['./create-reminder-dialog.component.scss'],
  standalone: true,
  imports: [
    BaseIonListComponent,
    CalendarColorPipe,
    IonButton,
    IonButtons,
    IonCol,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonItem,
    IonInput,
    ReactiveFormsModule,
    IonToggle,
    IonLabel,
    IonDatetimeButton,
    IonDatetime,
    LetDirective,
    NgStyle,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonRange,
  ],
})
export class CreateReminderDialogComponent {
  @ViewChild('modal') modal!: IonModal;
  readonly reminderDetailForm = new FormGroup({
    title: new FormControl<string>(''),
    listId: new FormControl<string>(''),
    priority: new FormControl<number>(0), //
    isCompleted: new FormControl(false),
    startDate: new FormControl<string>(
      CreateReminderDialogComponent.getCurrentIsoTimeInLocalTime(Date.now()),
    ),
    dueDate: new FormControl<string>(
      CreateReminderDialogComponent.getCurrentIsoTimeInLocalTime(
        Date.now() + 3600 * 1000,
      ),
    ),
    notes: new FormControl<string>(''),
    url: new FormControl<string>(''),
    location: new FormControl<string>(''),
  });

  readonly reminderLists$: Observable<Calendar[]> = defer(() =>
    CapacitorCalendar.getRemindersLists(),
  ).pipe(
    catchError(() => of({ result: <RemindersList[]>[] })),
    map(({ result }) => result),
    switchMap((reminderLists) =>
      from(CapacitorCalendar.getDefaultRemindersList()).pipe(
        catchError(() => of({ result: {} as RemindersList })),
        tap(({ result }) => {
          reminderLists.forEach((list) => {
            if (list.id === result?.id)
              this.reminderDetailForm.patchValue({ listId: list.id });
          });
        }),
        map(() => reminderLists),
      ),
    ),
  );

  get permissionModalRole(): typeof PermissionModalRole {
    return PermissionModalRole;
  }

  present(): Promise<void> {
    return this.modal.present();
  }

  submit(event: SubmitEvent): void {
    event.preventDefault();
    const data = Object.keys(this.reminderDetailForm.value).reduce(
      (acc, curr) => {
        const itemKey = curr as keyof PartialWithRequiredAndOptionalExcluded<
          CreateReminderParam,
          'title',
          'completionDate'
        >;
        // @ts-ignore
        const itemData = this.reminderDetailForm.value[itemKey];
        if (curr === 'startDate' || curr === 'dueDate') {
          const date = Date.parse(itemData);
          if (date) acc[curr] = date;
        } else {
          if (itemData) {
            // @ts-ignore
            acc[curr] = itemData;
          }
        }
        return acc;
      },
      <
        PartialWithRequiredAndOptionalExcluded<
          CreateReminderParam,
          'title',
          'completionDate'
        >
      >{},
    );
    this.reminderDetailForm.reset();
    void this.dismiss(this.permissionModalRole.CONFIRM, data);
  }

  dismiss(
    role: PermissionModalRole,
    data?: Partial<CreateEventParam>,
  ): Promise<boolean> {
    return this.modal.dismiss(data, role);
  }

  static getCurrentIsoTimeInLocalTime(timestamp: number): string {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(timestamp - timezoneOffset).toISOString().slice(0, -1);
  }
}
