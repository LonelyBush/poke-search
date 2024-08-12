import { useRouteError } from 'react-router-dom';
import shroomish from '../../../assets/pics/shroomish.png';
import styles from './not-found-page-style.module.css';

function NotFoundPage() {
  const error = useRouteError() as Error;
  return (
    <div className={styles["not-found-page-container"]}>
      <h2>Oh no... Sorry, but this page is not existing</h2>
      <i>{error.message}</i>
      <img src={shroomish} alt="sad-shromish-pic" />
    </div>
  );
}

export default NotFoundPage;
