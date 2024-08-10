import psyduckImg from '../../../assets/pics/Psyduck.png';
import styles from './empty-search-result.module.css';

function EmptySearchResult() {
  return (
    <div className="empty-result-container">
      <div className={styles['empty-result-text']}>
        <span>Ohh no... there is no such pokemon according your query.</span>
        <span>Try again, please...</span>
      </div>
      <img
        className={styles['empty-result-img']}
        src={psyduckImg.src}
        alt="psyduch-img"
      />
    </div>
  );
}

export default EmptySearchResult;
