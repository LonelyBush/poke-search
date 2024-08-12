import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './search-page';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('Search-page-test', () => {
  it('Should correctly render ItemsList and SearchBar component', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <Routes>
          <Route path="/search/:pageNum" element={<SearchPage />} />
        </Routes>
      </MemoryRouter>,
      {
        wrapper: ProviderWrapper,
      },
    );
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByTestId('items-list')).toBeInTheDocument();
  });
});
