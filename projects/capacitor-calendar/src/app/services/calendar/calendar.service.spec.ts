import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService],
    });
    service = TestBed.inject(CalendarService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
