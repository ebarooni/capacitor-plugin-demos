import { CalendarColorPipe } from './calendar-color.pipe';
import { describe, test, expect } from 'vitest';

describe('CalendarColorPipe', () => {
  test('create an instance', () => {
    const pipe = new CalendarColorPipe();
    expect(pipe).toBeTruthy();
  });
});
