import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import PokemonTypes from './pokemon_types';

describe('PokemonTypes', () => {
  it('Check for success render with mock data', () => {
    const mockTypeData = [
      {
        type: {
          name: 'fire',
        },
      },
    ];
    const { getByText } = render(<PokemonTypes types={mockTypeData} />);
    const getTypeNameFire = getByText(/fir/i);
    expect(getTypeNameFire).toBeInTheDocument();
  });
});
