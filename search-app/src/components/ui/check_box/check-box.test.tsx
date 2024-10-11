import { describe, expect, it } from 'vitest';
import { ChangeEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import CheckBox from './check_box';

describe('Test Checkbox component', () => {
  it('should toggle the checked state when clicked', () => {
    let checkedState = false;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      checkedState = e.target.checked;
    };

    const { rerender, getByRole } = render(
      <CheckBox
        id="test-checkbox"
        name="testName"
        checked={checkedState}
        theme="dark"
        onChange={handleChange}
      />,
    );
    expect(getByRole('checkbox')).not.toBeChecked();
    fireEvent.click(getByRole('checkbox'));
    rerender(
      <CheckBox
        id="test-checkbox"
        name="testName"
        checked={checkedState}
        theme="dark"
        onChange={handleChange}
      />,
    );

    expect(getByRole('checkbox')).toBeChecked();
  });
});
