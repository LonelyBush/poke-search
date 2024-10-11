import { describe, expect, it } from 'vitest';
import getIdFromURL from './get-id-from-url';

describe('Test GetIdFromUrl function', () => {
  it('get id from url string', () => {
    const result = getIdFromURL('https://test.com/ability/984/');
    expect(result).toEqual('984');
  });
});
