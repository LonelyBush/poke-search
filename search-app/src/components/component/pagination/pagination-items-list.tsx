import {
  NavLink,
  useLoaderData,
  useParams,
  useSearchParams,
} from '@remix-run/react';
import styles from './pagination-items-style.module.css';
import useTheme from '../../../hooks/useTheme-hook';
import { LoaderResponse } from '../../../interfaces/api_interfaces';
import range from '../../../utils/range-func';

function Pagination() {
  const { resultsLength } = useLoaderData<LoaderResponse>();
  const { pageNum } = useParams();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const postPerPage = 21;
  const totalResultsLength = resultsLength || 0;
  const totalPages = Math.ceil(totalResultsLength / postPerPage);
  const totalPagesRange = range(totalPages, 1);
  const pagesCut = 5;
  const obj = {} as { [key: number]: number[] };
  for (let i = 1; i <= Math.ceil(totalPages / pagesCut); i += 1) {
    obj[i] = totalPagesRange.splice(0, pagesCut);
  }
  const [pages] = Object.values(obj).filter((elem) => {
    return elem.includes(Number(pageNum));
  });

  return (
    <div
      data-testid="pagination-container"
      className={`${styles[`pagination-container`]} ${styles[`${theme}`]}`}
    >
      <NavLink
        className={`${styles[`pagination-button`]} ${Number(pageNum) === 1 ? styles.disabled : ''} ${styles[`${theme}`]}`}
        to={`/page/${1}?${searchParams}`}
        type="button"
      >
        &laquo;
      </NavLink>
      <NavLink
        className={`${styles[`pagination-button`]} ${Number(pageNum) === 1 ? styles.disabled : ''} ${styles[`${theme}`]}`}
        to={`/page/${Number(pageNum) - 1}?${searchParams}`}
        type="button"
      >
        &lsaquo;
      </NavLink>
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
      <NavLink
        className={`${styles[`pagination-button`]} ${Number(pageNum) === totalPages ? styles.disabled : ''} ${styles[`${theme}`]}`}
        to={`/page/${Number(pageNum) + 1}?${searchParams}`}
        type="button"
      >
        &rsaquo;
      </NavLink>

      <NavLink
        className={`${styles[`pagination-button`]} ${Number(pageNum) === totalPages ? styles.disabled : ''} ${styles[`${theme}`]}`}
        to={`/page/${totalPages}?${searchParams}`}
        type="button"
      >
        &raquo;
      </NavLink>
    </div>
  );
}

export default Pagination;
