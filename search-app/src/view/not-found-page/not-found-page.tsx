import shroomish from '../../../assets/pics/shroomish.png';
import styles from './not-found-page-style.module.css';

function NotFoundPage() {
  return (
    <div className={styles['not-found-page-container']}>
      <h2>Oh no... Sorry, but this page is not existing</h2>
      <img src={shroomish.src} alt="sad-shromish-pic" />
    </div>
  );
}

export default NotFoundPage;
