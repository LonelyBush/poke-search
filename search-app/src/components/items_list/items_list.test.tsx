import { describe, expect, it } from 'vitest';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render, waitFor } from '@testing-library/react';
import ItemsList from './items_list';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('ItemsList', () => {
  it('Should render empty result page', async () => {
    const mockSearchVal = 'Wesjel';
    const { getByText } = render(
      <MemoryRouterProvider url="/search/1">
        <ItemsList searchValue={mockSearchVal} />
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );

    await waitFor(() => {
      expect(
        getByText('Ohh no... there is no such pokemon according your query.'),
      ).toBeDefined();
    });
  });
});
