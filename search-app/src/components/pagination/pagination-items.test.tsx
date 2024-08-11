import { render } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './pagination-items-list';
import { PaginationProps } from '../../interfaces/props_interfaces';
import ProviderWrapper from '../../utils/provider_wrapper';

describe('Pagination', () => {
  it('Should render without breaking 15 elements', () => {
    const pagiProps: PaginationProps = {
      allResults: 300,
      postPerPage: 20,
      handlePageChange: vi.fn(),
    };
    const { getByTestId } = render(
      <MemoryRouterProvider url="/search/1">
        <Pagination
          allResults={pagiProps.allResults}
          postPerPage={pagiProps.postPerPage}
          handlePageChange={pagiProps.handlePageChange}
        />
        ,
      </MemoryRouterProvider>,
      { wrapper: ProviderWrapper },
    );
    expect(getByTestId('pagination-container').children.length).toEqual(15);
  });
});
