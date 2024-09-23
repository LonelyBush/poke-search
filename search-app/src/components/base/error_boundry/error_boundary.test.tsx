import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ErrorBoundary from './error_boundary';

const ErrorMockChild = () => {
  throw new Error();
};

describe('ErrorBoundary', () => {
  it('Check for catching error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorMockChild />
      </ErrorBoundary>,
    );
    const errorMessage = getByText('Something went wrong...');
    expect(errorMessage).toBeDefined();
  });
});
