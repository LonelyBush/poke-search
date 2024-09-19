import { expect, test } from 'vitest';
import postsReducer, {
  addPokemon,
  removeAllPokemons,
  removePokemon,
} from './redux_slice';

const mockState = [
  { id: '0', name: 'charizard', height: '15', experience: '100' },
  { id: '1', name: 'bulba', height: '20', experience: '142' },
  { id: '2', name: 'Ivy', height: '25', experience: '150' },
];

const mockPayload = {
  id: '0',
  name: 'charizard',
  height: '15',
  experience: '100',
};

test('Should return initial state value', () => {
  expect(postsReducer(undefined, { type: 'pokeStore' })).toEqual([]);
});

test('Should handle add Pokemon action', () => {
  expect(postsReducer(undefined, addPokemon(mockPayload))).toEqual([
    { ...mockPayload },
  ]);
});

test('Should return new state with deleted 1 item', () => {
  expect(postsReducer(mockState, removePokemon(mockPayload))).toEqual([
    { id: '1', name: 'bulba', height: '20', experience: '142' },
    { id: '2', name: 'Ivy', height: '25', experience: '150' },
  ]);
});

test('Should return clear empty state', () => {
  expect(postsReducer(mockState, removeAllPokemons())).toEqual([]);
});
