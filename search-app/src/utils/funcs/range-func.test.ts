import { describe, expect, it } from 'vitest';
import range from './range-func';

describe('Range Function', () => {
  it('Should render array from 0 to default', () => {
    const result = range(6);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });
  it('Should render array from 5 to 10', () => {
    const result = range(6, 5);
    expect(result).toEqual([5, 6, 7, 8, 9, 10]);
  });
});
