export interface CreateEventParam {
  title: string;
  calendarId: string;
  location: string;
  startDate: number;
  endDate: number;
  isAllDay: boolean;
  alertOffsetInMinutes: number[];
  url: string;
  notes: string;
}
