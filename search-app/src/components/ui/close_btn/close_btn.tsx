/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './close_btn-style.module.css';
import useTheme from '../../../hooks/useTheme-hook';

function CloseBtn({ onClick }: { onClick: () => void }) {
  const { theme } = useTheme();
  return (
    <button
      data-testid="close-btn"
      className={`${styles['close-btn']} ${styles[`${theme}`]}`}
      onClick={onClick}
      type="button"
    />
  );
}

export default CloseBtn;
