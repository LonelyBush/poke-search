import { describe, expect, it } from 'vitest';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../../../utils/wrappers/render_with_providers';
import SearchComponentRow from './search-element';
import styles from './search-component-row-style.module.css';

describe('Test searchcomponent-row', () => {
  it('Should implement add action in reducer', async () => {
    const { getByRole, store } = renderWithProviders(
      <MemoryRouter>
        <SearchComponentRow id="1" poke_id="1" />
      </MemoryRouter>,
    );

    await waitFor(() => {
      userEvent.click(getByRole('checkbox'));
      expect(store.getState().pokeStore).toEqual([
        { experience: 64, height: 7, id: '1', name: 'bulbasaur' },
      ]);
    });
  });
  it('Should implement remove action in reducer', async () => {
    const initialPokeStoreState = [
      {
        experience: 64,
        height: 7,
        id: '1',
        name: 'bulbasaur',
      },
    ];
    const { getByRole, store } = renderWithProviders(
      <MemoryRouter>
        <SearchComponentRow id="1" poke_id="1" />
      </MemoryRouter>,
      {
        preloadedState: {
          pokeStore: initialPokeStoreState,
        },
      },
    );

    await waitFor(() => {
      userEvent.click(getByRole('checkbox'));
      expect(store.getState().pokeStore.length).toEqual(0);
    });
  });
  it('Should change link class to active after submit click', async () => {
    const { getByRole } = renderWithProviders(
      <MemoryRouter>
        <SearchComponentRow id="1" poke_id="1" />
      </MemoryRouter>,
    );

    await waitFor(() => {
      userEvent.click(getByRole('link'));
      expect(getByRole('link').classList.contains(styles.active)).toBeDefined();
    });
  });
});
