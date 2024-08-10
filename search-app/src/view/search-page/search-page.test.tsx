import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './search-page';
import ProviderWrapper from '../../utils/provider_wrapper';
import { ThemeProvider } from '../../context/theme_context';

describe('Search-page-test', () => {
  it('Should correctly render ItemsList and SearchBar component', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <Routes>
          <Route
            path="/search/:pageNum"
            element={
              <SearchPage>
                <div />
              </SearchPage>
            }
          />
        </Routes>
      </MemoryRouter>,
      {
        wrapper: ProviderWrapper,
      },
    );
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByTestId('items-list')).toBeInTheDocument();
  });
  it('Applies the theme from the context', () => {
    function TestComponent() {
      return (
        <ThemeProvider>
          <SearchPage>
            <div />
          </SearchPage>
        </ThemeProvider>
      );
    }

    const { container } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <Routes>
          <Route path="/search/:pageNum" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>,
      {
        wrapper: ProviderWrapper,
      },
    );

    expect(container.classList.contains('dark')).toBeDefined();
  });
});
