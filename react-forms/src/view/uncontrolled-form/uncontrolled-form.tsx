import { FormEvent, useRef } from 'react';
import Button from '../../components/ui/button/button';
import styles from './uncontrolled-form.module.css';
import AutoComplete from '../../components/auto-complete-input/auto-complete-input';

function UncontrolledForm() {
  const name = useRef(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formMainSection}>
      <form onSubmit={handleSubmit} className={styles.formContent}>
        <label className={styles.inputWrapper} htmlFor="user-name">
          Name:
          <input
            className={styles.inputTextStyle}
            ref={name}
            name="user-name"
            type="text"
          />
        </label>
        <label className={styles.inputWrapper} htmlFor="user-age">
          Age:
          <input
            className={styles.inputTextStyle}
            name="user-age"
            type="text"
          />
        </label>
        <label className={styles.inputWrapper} htmlFor="user-gender">
          Gender:
          <select className={styles.inputTextStyle} name="user-gender">
            <option>Man</option>
            <option>Woman</option>
          </select>
        </label>
        <AutoComplete />
        <label className={styles.inputWrapper} htmlFor="user-email">
          Email:
          <input
            className={styles.inputTextStyle}
            name="user-email"
            type="email"
          />
        </label>
        <label className={styles.inputWrapper} htmlFor="user-passowrd">
          Password:
          <input
            className={styles.inputTextStyle}
            name="user-password"
            type="password"
          />
        </label>
        <label className={styles.inputWrapper} htmlFor="user-confirm-password">
          Confirm Password:
          <input
            className={styles.inputTextStyle}
            name="confirm-password"
            type="password"
          />
        </label>

        <Button type="submit" onClick={() => {}}>
          Submit Form
        </Button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
