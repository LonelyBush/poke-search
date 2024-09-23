import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchComponentRow from './search-component-row';
import pokeball from '../../../assets/pics/pokeball.png';
import ProviderWrapper from '../../../utils/provider_wrapper';
import styles from './search-component-row-style.module.css';

const defaultData = {
  name: 'charizard',
  id: '4',
};

describe('Renders row with charizard without breaking', async () => {
  it('Renders without breaking', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      expect(screen.getByText(/charizard/i)).toBeInTheDocument();
    });
  });
  it('Check for image loader component', () => {
    const { getByAltText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    const image = getByAltText('pokeball');
    expect(image).toHaveAttribute('src', pokeball);
  });
  it('Renders image from API', async () => {
    const { getByAltText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      const image = getByAltText('small-poke-img');
      expect(image).toBeDefined();
    });
  });

  it('Open details page', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        '/detail/charizard',
      );
    });
  });

  it('Check for active NavLink', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      userEvent.click(screen.getByRole('link'));
      expect(screen.getByRole('link').classList.contains(styles.active)).toBe(
        true,
      );
    });
  });
  it('Check for checkbox change handler', async () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} id={defaultData.id} />,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    await waitFor(() => {
      userEvent.click(getByRole('checkbox'));
      expect(getByRole('checkbox')).toBeChecked();
    });
  });
});
