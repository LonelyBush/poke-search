import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import SearchComponentRow from './search-component-row';
import ProviderWrapper from '../../utils/provider_wrapper';

const defaultData = {
  name: 'charizard',
  id: '4',
};

vi.mock('next/navigation', () => ({
  useParams: () => ({
    pageNum: '1',
    pokeName: '',
  }),
}));

describe('Renders row with charizard without breaking', async () => {
  it('Renders without breaking', async () => {
    mockRouter.push('/search/1');
    render(
      <MemoryRouterProvider>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      expect(screen.getByText(/charizard/i)).toBeInTheDocument();
    });
  });
  it('Renders image from API', async () => {
    mockRouter.push('/search/1');
    const { getByAltText } = render(
      <MemoryRouterProvider>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      const image = getByAltText('small-poke-img');
      expect(image).toBeDefined();
    });
  });

  it('Open details page', async () => {
    mockRouter.push('/search/1');
    render(
      <MemoryRouterProvider>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        '/search/1/detail/charizard',
      );
    });
  });

  it('Check for checkbox change handler', async () => {
    mockRouter.push('/search/1');
    const { getByRole } = render(
      <MemoryRouterProvider>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      userEvent.click(getByRole('checkbox'));
      expect(getByRole('checkbox')).toBeChecked();
    });
  });
});
