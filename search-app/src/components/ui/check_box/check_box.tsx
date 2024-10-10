import { ChangeEvent } from 'react';
import styles from './check_box-style.module.css';

function CheckBox({
  id,
  name,
  onChange,
  checked,
  theme,
}: {
  theme: string;
  checked: boolean;
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles['check-box-container']}>
      <label
        htmlFor={id}
        className={`${styles['label-wrapper']} ${styles[`${theme}`]}`}
      >
        <input
          name={name}
          onChange={onChange}
          id={id}
          type="checkbox"
          className={styles.checkbox}
          checked={checked}
        />
        <span className={styles.checkmark} />
      </label>
    </div>
  );
}

export default CheckBox;
