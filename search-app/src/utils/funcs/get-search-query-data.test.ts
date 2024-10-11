import { describe, expect, it } from 'vitest';
import getSearchQueryData from './get-search-query-data';

describe('Test GetSearchQueryData func', () => {
  const mockPokeResult = [
    { name: 'charizard', url: 'http:/test.com/pokemon/984/' },
    { name: 'bulbasaur', url: 'http:/test.com/pokemon/876/' },
    { name: 'squirtle', url: 'http:/test.com/234/' },
  ];
  it('Filter array by receiving name query', () => {
    const result = getSearchQueryData('Charizard', mockPokeResult);
    expect(result).toEqual([
      { name: 'charizard', url: 'http:/test.com/pokemon/984/' },
    ]);
  });
  it('Filter array by receiving name query', () => {
    const result = getSearchQueryData('234', mockPokeResult);
    expect(result).toEqual([{ name: 'squirtle', url: 'http:/test.com/234/' }]);
  });
});
