import { FilterForPlatformPipe } from './filter-for-platform.pipe';
import { describe, test, expect } from 'vitest';

describe('FilterForPlatformPipe', () => {
  test('create an instance', () => {
    const pipe = new FilterForPlatformPipe();
    expect(pipe).toBeTruthy();
  });
});
