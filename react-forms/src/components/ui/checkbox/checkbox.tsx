/* eslint-disable react/require-default-props */
import { forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';
import styles from './checkbox-style.module.css';
import error from '../../../index.module.css';

const CheckBox = forwardRef<
  HTMLInputElement,
  {
    onChange?: ChangeHandler;
    name: string;
    label: string;
    id: string;
    error: string;
  }
>((props, ref) => {
  return (
    <div className={styles['check-box-container']}>
      <label htmlFor={props.name} className={`${styles['label-wrapper']}`}>
        <input
          ref={ref}
          id={props.id}
          name={props.name}
          type="checkbox"
          className={styles.checkbox}
          onChange={props.onChange}
        />
        <span className={styles.checkmark} />
        {props.label}
      </label>

      <span className={error.errorMes}>{`${props.error}`}</span>
    </div>
  );
});

export default CheckBox;
