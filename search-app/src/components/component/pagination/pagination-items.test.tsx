import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Pagination from './pagination-items-list';
import { PaginationProps } from '../../../interfaces/props_interfaces';
import ProviderWrapper from '../../../utils/provider_wrapper';
import styles from './pagination-items-style.module.css';

describe('Pagination', () => {
  it('Should render without breaking 15 elements', () => {
    const pagiProps: PaginationProps = {
      allResults: 300,
      postPerPage: 20,
      handlePageChange: vi.fn(),
    };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <Pagination
          allResults={pagiProps.allResults}
          postPerPage={pagiProps.postPerPage}
          handlePageChange={pagiProps.handlePageChange}
        />
        ,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    expect(getByTestId('pagination-container').children.length).toEqual(15);
  });

  it('Active link should work correctly', () => {
    const pagiProps: PaginationProps = {
      allResults: 1,
      postPerPage: 1,
      handlePageChange: vi.fn(),
    };
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <Pagination
          allResults={pagiProps.allResults}
          postPerPage={pagiProps.postPerPage}
          handlePageChange={pagiProps.handlePageChange}
        />
        ,
      </MemoryRouter>,
      { wrapper: ProviderWrapper },
    );
    userEvent.click(getByRole('link'));
    expect(getByRole('link').classList.contains(styles.active)).toBe(true);
  });
});
