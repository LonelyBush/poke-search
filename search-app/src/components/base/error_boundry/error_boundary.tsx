import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import shroomish from '../../../assets/pics/shroomish.png';
import styles from './error_boundary-style.module.css';

export default function DefaultErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    <div className={styles['error-page-container']}>
      <h2>Oh no... Something is wrong</h2>
      <img src={shroomish} alt="sad-shromish-pic" />
      <h2>
        {error.status} {error.statusText}
      </h2>
      <p>{error.data}</p>
    </div>;
  }
  if (error instanceof Error) {
    return (
      <div className={styles['error-page-container']}>
        <h2>Oh no... Something is wrong</h2>
        <img src={shroomish} alt="sad-shromish-pic" />
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
  return (
    <div className={styles['error-page-container']}>
      <h2>Oh no... Something is wrong</h2>
      <img src={shroomish} alt="sad-shromish-pic" />
      <h2>Unknown Error</h2>
    </div>
  );
}

/*

<div className={styles['not-found-page-container']}>
      <h2>Oh no... Sorry, but this page is not existing</h2>
      <img src={shroomish} alt="sad-shromish-pic" />
    </div>
*/
