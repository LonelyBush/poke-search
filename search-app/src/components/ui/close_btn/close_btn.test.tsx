import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CloseBtn from './close_btn';
import ProviderWrapper from '../../../utils/wrappers/provider_wrapper';

describe('Test CloseBtn', () => {
  it('render CloseBtn', () => {
    const { getByTestId } = render(
      <ProviderWrapper>
        <CloseBtn onClick={() => {}} />
      </ProviderWrapper>,
    );
    expect(getByTestId('close-btn')).toBeInTheDocument();
  });
  it('called for onClick function in CloseBtn', () => {
    const onClick = vi.fn();
    const { getByTestId } = render(
      <ProviderWrapper>
        <CloseBtn onClick={onClick} />
      </ProviderWrapper>,
    );
    fireEvent.click(getByTestId('close-btn'));
    expect(onClick).toBeCalledTimes(1);
  });
});
