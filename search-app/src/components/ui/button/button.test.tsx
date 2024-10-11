import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './button';

describe('Test Button component', () => {
  it('Default render of Button', () => {
    const { getByRole } = render(
      <Button btnType="button" theme="dark" onClick={() => {}}>
        Button
      </Button>,
    );
    expect(getByRole('button')).toBeInTheDocument();
  });
  it('calls onChange while click on ToggleSwitch', () => {
    const onClick = vi.fn();

    const { getByRole } = render(
      <Button btnType="button" theme="dark" onClick={onClick}>
        Button
      </Button>,
    );
    fireEvent.click(getByRole('button'));
    expect(onClick).toBeCalledTimes(1);
  });
});
