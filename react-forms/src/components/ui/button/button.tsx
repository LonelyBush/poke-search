/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import styles from './button-style.module.css';

function Button({
  type,
  onClick,
  children,
  disabled,
}: {
  disabled: boolean;
  type: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      type={type !== 'button' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
