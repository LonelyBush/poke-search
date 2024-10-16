import { createRemixStub } from '@remix-run/testing';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import PokemonFlavorText from './pokemon_flavor-text';
import ProviderWrapper from '../../../utils/wrappers/provider_wrapper';

describe('Test Pokemon-flavor-text component', () => {
  it('Default render of flavor text', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: PokemonFlavorText,
        loader() {
          return {
            pokemon_species: {
              flavor_text_entries: [
                {
                  flavor_text:
                    'The plant blooms\nwhen it is\nabsorbing solar\fenergy. It stays\non the move to\nseek sunlight.',
                  language: {
                    name: 'en',
                    url: 'https://pokeapi.co/api/v2/language/9/',
                  },
                  version: {
                    name: 'red',
                    url: 'https://pokeapi.co/api/v2/version/1/',
                  },
                },
              ],
              name: 'venusaur',
            },
          };
        },
      },
    ]);
    const { getByText } = render(
      <ProviderWrapper>
        <RemixStub />
      </ProviderWrapper>,
    );
    await waitFor(() => {
      expect(getByText(/The plant blooms/i)).toBeInTheDocument();
    });
  });
  it('Default render when no text provided', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: PokemonFlavorText,
        loader() {
          return {
            pokemon_species: {
              name: 'venusaur',
            },
          };
        },
      },
    ]);
    const { getByText } = render(
      <ProviderWrapper>
        <RemixStub />
      </ProviderWrapper>,
    );
    await waitFor(() => {
      expect(getByText(/Sorry :c No text provided/i)).toBeInTheDocument();
    });
  });
});
