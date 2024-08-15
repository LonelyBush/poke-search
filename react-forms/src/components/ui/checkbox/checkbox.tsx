import { forwardRef } from 'react';
import styles from './checkbox-style.module.css';

const CheckBox = forwardRef<
  HTMLInputElement,
  { name: string; label: string; id: string; errors: { [key: string]: string } }
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
        />
        <span className={styles.checkmark} />
        {props.label}
      </label>
      {props.errors.tc && (
        <span className={styles.errorMes}>*{props.errors.tc}</span>
      )}
    </div>
  );
});

export default CheckBox;
