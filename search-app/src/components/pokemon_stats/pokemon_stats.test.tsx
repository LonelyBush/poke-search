import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PokemonStats from './pokemon_stats';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('PokemonTypes', () => {
  it('Check for success render with mock data', () => {
    const mockTypeData = [
      {
        base_stat: 20,
        stat: {
          name: 'hp',
        },
      },
      {
        base_stat: 35,
        stat: {
          name: 'attack',
        },
      },
      {
        base_stat: 45,
        stat: {
          name: 'defense',
        },
      },
      {
        base_stat: 60,
        stat: {
          name: 'speed',
        },
      },
    ];
    const { getByText } = render(<PokemonStats stats={mockTypeData} />, {
      wrapper: ProviderWrapper,
    });
    const getBaseStat = getByText(/20/i);
    expect(getBaseStat).toBeInTheDocument();
  });
});
