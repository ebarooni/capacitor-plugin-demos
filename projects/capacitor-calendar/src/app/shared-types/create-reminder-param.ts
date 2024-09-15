import { ReminderRecurrenceRule } from '@ebarooni/capacitor-calendar';

export interface CreateReminderParam {
  title: string;
  listId: string;
  priority: number;
  isCompleted: boolean;
  startDate: number;
  dueDate: number;
  completionDate: number;
  notes: string;
  url: string;
  location: string;
  recurrence: ReminderRecurrenceRule;
}
