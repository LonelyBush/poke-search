import { render, waitFor } from '@testing-library/react';
import { Router } from 'next/router';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { describe, expect, it } from 'vitest';
import App from './pages/_app';
import ProviderWrapper from './utils/provider_wrapper';

describe('ItemsList', () => {
  it('Should render correctly 20 search-row items', () => {
    const { getByText } = render(
      <MemoryRouterProvider url="/search/1">
        <App
          Component={() => <div>Test</div>}
          pageProps={{}}
          router={{} as Router}
        />
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );

    waitFor(() => {
      expect(getByText('Test')).toBeInTheDocument();
    });
  });
});
