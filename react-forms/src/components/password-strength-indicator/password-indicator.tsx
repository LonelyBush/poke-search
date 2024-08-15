import styles from './password-strength-style.module.css';

function PasswordStrength({ strengthValue }: { strengthValue: number }) {
  let indicator;
  let label;
  if (strengthValue <= 6 && strengthValue >= 4) {
    indicator = <div className={styles.weak} />;
    label = 'Your password is weak!';
  }
  if (strengthValue <= 3) {
    indicator = <div className={styles.medium} />;
    label = 'Your password is medium!';
  }
  if (strengthValue === 0) {
    indicator = <div className={styles.strong} />;
    label = 'Your password is strong!';
  }

  return (
    <div className={styles.passwordStrengthWrapper}>
      <div className={styles.strengthMeter}>{indicator}</div>
      {label}
    </div>
  );
}

export default PasswordStrength;
