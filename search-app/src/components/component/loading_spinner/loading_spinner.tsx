import styles from './loading_spinner_style.module.css';

function LoadingSpinner() {
  return (
    <div data-testid="loading-spinner" className={styles['loader-component']}>
      <div className={styles['pokeball-container']}>
        <div className={styles['pokeball-btn']} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
