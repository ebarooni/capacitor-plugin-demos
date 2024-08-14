import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import '../../../__mocks__/match-media';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
