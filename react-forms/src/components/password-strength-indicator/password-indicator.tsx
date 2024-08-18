import styles from './password-strength-style.module.css';

function PasswordStrength({
  passwordValue,
}: {
  passwordValue: string | undefined;
}) {
  let indicator;
  let label;
  if (passwordValue === undefined || passwordValue === '') {
    label = 'Password strength';
  }
  if (passwordValue !== undefined && passwordValue.length > 0) {
    if (passwordValue.length >= 6) {
      if (
        /.*\d.*/.test(passwordValue) ||
        /^(?=.*[A-Z])(?=.*[a-z]).+$/.test(passwordValue) ||
        /^(?=.*[a-z]).+$/.test(passwordValue) ||
        /^(?=.*[A-Z]).+$/.test(passwordValue) ||
        /^(?=.*[\W_]).+$/.test(passwordValue)
      ) {
        indicator = <div className={styles.weak} />;
        label = 'weak';
      }
      if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(passwordValue)) {
        indicator = <div className={styles.medium} />;
        label = 'medium';
      }
      if (
        passwordValue.length > 8 &&
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/.test(passwordValue)
      ) {
        indicator = <div className={styles.strong} />;
        label = 'strong';
      }
    } else {
      indicator = <div className={styles.weak} />;
      label = 'weak';
    }
  }

  return (
    <div className={styles.passwordStrengthWrapper}>
      <div className={styles.strengthMeter}>{indicator}</div>
      {label}
    </div>
  );
}

export default PasswordStrength;
