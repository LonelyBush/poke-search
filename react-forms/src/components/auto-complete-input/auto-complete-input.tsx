/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { ChangeHandler } from 'react-hook-form';
import styles from './auto-complete-input-style.module.css';
import { RootState } from '../../store/store';

const AutoComplete = forwardRef<
  HTMLInputElement,
  { onChange?: ChangeHandler; name: string; id: string; errors: string }
>((props, ref) => {
  const data = useSelector((state: RootState) => state.countryList);

  return (
    <div className={styles.autoCompleteWrapper}>
      <label className={styles.inputWrapper} htmlFor={props.name}>
        Country:
        <input
          ref={ref}
          id={props.id}
          name={props.name}
          list="country-list"
          className={styles.inputTextStyle}
          onChange={props.onChange}
        />
        <datalist id="country-list">
          {data.map((elem) => {
            return (
              <option key={elem} value={elem}>
                {elem}
              </option>
            );
          })}
        </datalist>
        <span className={styles.errorMes}>{props.errors}</span>
      </label>
    </div>
  );
});

export default AutoComplete;
