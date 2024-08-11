import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import SearchPage from './search-page';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('Search-page-test', () => {
  it('Should correctly render ItemsList and SearchBar component', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouterProvider url="/search/1">
        <SearchPage>
          <div />
        </SearchPage>
      </MemoryRouterProvider>,
      {
        wrapper: ProviderWrapper,
      },
    );
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByTestId('items-list')).toBeInTheDocument();
  });
  it('Applies the theme from the context', () => {
    const { container } = render(
      <MemoryRouterProvider url="/search/1">
        <SearchPage>
          <div />
        </SearchPage>
      </MemoryRouterProvider>,
      {
        wrapper: ProviderWrapper,
      },
    );

    expect(container.classList.contains('dark')).toBeDefined();
  });
});
