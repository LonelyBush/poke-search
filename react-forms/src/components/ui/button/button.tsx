import { ReactNode } from 'react';
import styles from './button-style.module.css';

function Button({
  type,
  onClick,
  children,
}: {
  type: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      className={styles.button}
      type={type !== 'button' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
