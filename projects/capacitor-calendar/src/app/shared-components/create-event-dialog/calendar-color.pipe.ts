import { Pipe, PipeTransform } from '@angular/core';
import { Calendar } from '@ebarooni/capacitor-calendar';

@Pipe({
  name: 'calendarColor',
  standalone: true,
})
export class CalendarColorPipe implements PipeTransform {
  transform(
    calendarId: string | null,
    calendars: Calendar[],
  ): string | unknown {
    return calendars.find((calendar) => calendar.id === calendarId)?.color;
  }
}
