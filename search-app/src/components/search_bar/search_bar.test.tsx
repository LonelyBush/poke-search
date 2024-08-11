import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './search_bar';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('SearchBar', () => {
  it('Should submit query correctly', async () => {
    const mockType = 'Pikachu';
    const props: SearchBarProps = {
      handleSubmit: vi.fn((e) => e.preventDefault()),
      searchValue: null,
    };
    const { getByRole } = render(
      <SearchBar
        handleSubmit={props.handleSubmit}
        searchValue={props.searchValue}
      />,
      { wrapper: ProviderWrapper },
    );
    await userEvent.type(getByRole('textbox'), mockType);
    await userEvent.click(getByRole('button', { name: 'Search' }));
    expect(props.handleSubmit).toHaveBeenCalled();
  });
  it('Should set focus correctly', async () => {
    const user = userEvent.setup();
    const props: SearchBarProps = {
      handleSubmit: vi.fn(),
      searchValue: '',
    };
    render(
      <SearchBar
        handleSubmit={props.handleSubmit}
        searchValue={props.searchValue}
      />,
      { wrapper: ProviderWrapper },
    );
    await user.click(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox').getAttribute('data-focused')).toBe(
      'true',
    );
  });
});
