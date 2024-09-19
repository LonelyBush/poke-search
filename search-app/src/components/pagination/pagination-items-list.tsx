import { NavLink, useLoaderData, useSearchParams } from '@remix-run/react';
import styles from './pagination-items-style.module.css';
import useTheme from '../../hooks/useTheme-hook';
import { LoaderResponse } from '../../interfaces/api_interfaces';

// resultsLength === undefined ? 0 : resultsLength

function Pagination() {
  const { resultsLength } = useLoaderData<LoaderResponse>();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const postPerPage = 20;
  const totalResultsLength = resultsLength || 0;
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalResultsLength / postPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div
      data-testid="pagination-container"
      className={`${styles[`pagination-container`]} ${styles[`${theme}`]}`}
    >
      {pages.map((elem) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles[`pagination-button`]} ${styles[`${theme}`]} ${styles.active}`
                : `${styles[`pagination-button`]} ${styles[`${theme}`]}`
            }
            to={`/page/${elem}?${searchParams}`}
            key={elem}
            type="button"
          >
            {elem}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Pagination;
