import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PokemonTypes from './pokemon_types';

describe('Test Pokemon-Types component', () => {
  it('Should default render types container with mocked types data', () => {
    const mockTypes = [
      { type: { name: 'poison' } },
      { type: { name: 'fire' } },
      { type: { name: 'ice' } },
    ];
    const { getByText } = render(<PokemonTypes types={mockTypes} />);

    expect(getByText('poi')).toBeInTheDocument();
    expect(getByText('fir')).toBeInTheDocument();
    expect(getByText('ice')).toBeInTheDocument();
  });
});
