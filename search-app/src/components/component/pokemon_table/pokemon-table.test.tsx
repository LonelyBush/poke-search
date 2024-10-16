import { createRemixStub } from '@remix-run/testing';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonTable from './pokemon-table';
import ProviderWrapper from '../../../utils/wrappers/provider_wrapper';
import styles from './pokemon-table-style.module.css';

describe('Test Pokemon-table', () => {
  it('Default render of pokemon table with mocked data', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: PokemonTable,
        loader() {
          return {
            pokemon_species: {
              shape: {
                name: 'quadruped',
              },
            },
            pokemon_data: {
              height: 70,
              weight: 130,
              abilities: [
                {
                  is_hidden: false,
                  ability: {
                    name: 'run-away',
                  },
                },
                {
                  is_hidden: false,
                  ability: {
                    name: 'guts',
                  },
                },
              ],
            },
          };
        },
      },
    ]);
    const { getByText } = render(
      <ProviderWrapper>
        <RemixStub />
      </ProviderWrapper>,
    );
    await waitFor(() => {
      expect(getByText('Run-away')).toBeInTheDocument();
      expect(getByText('Guts')).toBeInTheDocument();
      expect(getByText('7 m')).toBeInTheDocument();
      expect(getByText('13 kg')).toBeInTheDocument();
      expect(getByText('Quadruped')).toBeInTheDocument();
    });
  });

  it('Default render of pokemon table with mocked data', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: PokemonTable,
        loader() {
          return {
            pokemon_species: {
              shape: {
                name: 'quadruped',
              },
            },
            pokemon_data: {
              height: 70,
              weight: 130,
              abilities: [
                {
                  is_hidden: false,
                  ability: {
                    name: 'run-away',
                  },
                },
                {
                  is_hidden: false,
                  ability: {
                    name: 'guts',
                  },
                },
              ],
            },
          };
        },
      },
    ]);
    const { getByLabelText, getByRole, getByText } = render(
      <ProviderWrapper>
        <RemixStub />
      </ProviderWrapper>,
    );
    await waitFor(() => {
      userEvent.click(getByLabelText('ability-pointer-1'));
      expect(getByText('Ups ATTACK if suffering.')).toBeInTheDocument();
      userEvent.click(getByRole('button'));
      expect(
        !getByLabelText('ability-description').classList.contains(styles.open),
      ).toBeDefined();
    });
  });
});
