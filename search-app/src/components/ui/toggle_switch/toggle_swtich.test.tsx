import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import ToggleSwitch from './toggle_switch';

describe('Test ToggleSwitch component', () => {
  it('Default render of ToggleSwitch', () => {
    const { getByRole } = render(<ToggleSwitch onChange={() => {}} />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });
  it('calls onChange while click on ToggleSwitch', () => {
    const onChange = vi.fn();

    const { getByRole } = render(<ToggleSwitch onChange={onChange} />);
    fireEvent.click(getByRole('checkbox'));
    expect(onChange).toBeCalledTimes(1);
  });
});
