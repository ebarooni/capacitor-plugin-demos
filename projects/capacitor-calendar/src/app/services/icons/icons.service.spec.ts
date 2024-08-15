import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect, vi } from 'vitest';
import { IconsService } from './icons.service';
import { addIcons } from 'ionicons';

vi.mock('ionicons', () => ({
  addIcons: vi.fn(),
}));

describe('IconsService', () => {
  let service: IconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsService],
    });
    service = TestBed.inject(IconsService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test(`should register the icons defined the 'ICONS' property`, () => {
    service.registerIcons();
    expect(addIcons).toHaveBeenCalledWith(IconsService['ICONS']);
  });
});
