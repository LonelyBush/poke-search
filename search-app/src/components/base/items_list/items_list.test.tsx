import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemsList from './items_list';
import ProviderWrapper from '../../../utils/provider_wrapper';

describe('ItemsList', () => {
  it('Should render correctly 20 search-row items', async () => {
    const mockSearchVal = '';
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue={mockSearchVal} />
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );

    await waitFor(() => {
      expect(getByTestId('items-list').children.length).toEqual(20);
    });
  });

  it('Should render empty result page', async () => {
    const mockSearchVal = 'Wesjel';
    const { getByText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue={mockSearchVal} />
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );

    await waitFor(() => {
      expect(
        getByText('Ohh no... there is no such pokemon according your query.'),
      ).toBeDefined();
    });
  });
});
