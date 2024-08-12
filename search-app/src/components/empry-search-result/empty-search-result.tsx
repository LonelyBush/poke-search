import psyduckImg from '../../../assets/pics/Psyduck.png';
import styles from './empty-search-result-style.module.css';

function EmptySearchResult() {
  return (
    <div className={styles['empty-result-container']}>
      <div className={styles['empty-result-text']}>
        <span>Ohh no... there is no such pokemon according your query.</span>
        <span>Try again, please...</span>
      </div>
      <img
        className={styles['empty-result-img']}
        src={psyduckImg}
        alt="psyduch-img"
      />
    </div>
  );
}

export default EmptySearchResult;
