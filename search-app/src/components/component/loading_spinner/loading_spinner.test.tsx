import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoadingSpinner from './loading_spinner';

describe('LoadingSpinner', () => {
  it('Render loading spinner succesfully', () => {
    const { getByTestId } = render(<LoadingSpinner />);
    expect(getByTestId('loading-spinner')).toBeDefined();
  });
});
