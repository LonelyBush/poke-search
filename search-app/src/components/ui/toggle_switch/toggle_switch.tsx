import { ChangeEvent } from 'react';
import styles from './toggle_switch-style.module.css';

function ToggleSwitch({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles['toggle-switch-container']}>
      <label htmlFor="toggle-switch" className={styles.switch}>
        <input
          onChange={onChange}
          id="toggle-switch"
          type="checkbox"
          className={styles['switch-input']}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    </div>
  );
}

export default ToggleSwitch;
