import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PokemonStats from './pokemon_stats';
import ProviderWrapper from '../../../utils/wrappers/provider_wrapper';

describe('Test Pokemon stats component', () => {
  it('Should default render with mocked data', () => {
    const mockStats = [
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 82,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 81,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ];
    const { getByText } = render(
      <ProviderWrapper>
        <PokemonStats stats={mockStats} />
      </ProviderWrapper>,
    );
    expect(getByText('83')).toBeInTheDocument();
    expect(getByText('82')).toBeInTheDocument();
    expect(getByText('81')).toBeInTheDocument();
    expect(getByText('80')).toBeInTheDocument();
  });
});
