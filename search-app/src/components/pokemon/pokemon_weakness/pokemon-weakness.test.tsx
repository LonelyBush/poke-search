import { createRemixStub } from '@remix-run/testing';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import PokemonWeakness from './pokemon-weakness';

describe('Test PokemonWeakness component', () => {
  it('Should default render pokemon weaknesses while open modal window of details', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: PokemonWeakness,
        loader() {
          return {
            pokemon_weakness: ['poison', 'flying', 'fire'],
          };
        },
      },
    ]);
    const { getByText } = render(<RemixStub />);
    await waitFor(() => {
      expect(getByText('poi')).toBeInTheDocument();
    });
  });
});
