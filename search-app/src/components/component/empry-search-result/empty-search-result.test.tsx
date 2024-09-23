import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import EmptySearchResult from './empty-search-result';

describe('ErrorBoundary', () => {
  it('Check for catching error', () => {
    const { getByText } = render(<EmptySearchResult />);
    const errorMessage = getByText('Try again, please...');
    expect(errorMessage).toBeDefined();
  });
});
