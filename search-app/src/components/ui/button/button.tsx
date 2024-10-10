/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import styles from './button-style.module.css';

function Button({
  btnType = 'button',
  children,
  onClick,
  theme,
}: {
  btnType: 'submit' | 'reset' | 'button';
  children: ReactNode;
  theme: string;
  onClick?: () => void;
}) {
  return (
    <button
      type={btnType === 'button' ? 'button' : 'submit'}
      className={`${styles[`submit-btn`]} ${styles[`${theme}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
