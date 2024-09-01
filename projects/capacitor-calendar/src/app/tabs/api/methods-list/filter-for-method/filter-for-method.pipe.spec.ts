import { FilterForMethodPipe } from './filter-for-method.pipe';
import { describe, test, expect } from 'vitest';

describe('FilterForMethodPipe', () => {
  test('create an instance', () => {
    const pipe = new FilterForMethodPipe();
    expect(pipe).toBeTruthy();
  });
});
