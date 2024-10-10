import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import PokemonFlavorText from './pokemon_flavor-text';
import ProviderWrapper from '../../../utils/provider_wrapper';

describe('PokemonFlavorText', () => {
  it('Should render with data after passing mock url', async () => {
    const mockName = 'charizard';
    const { getByText } = render(<PokemonFlavorText name={mockName} />, {
      wrapper: ProviderWrapper,
    });
    await waitFor(() => {
      const flavorText = getByText(/spits fire that is hot enough/i);
      expect(flavorText).toBeDefined();
    });
  });
});
