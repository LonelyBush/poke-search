import { NavLink } from 'react-router-dom';
import { PaginationProps } from '../../interfaces/props_interfaces';
import styles from './pagination-items-style.module.css';
import useTheme from '../../hooks/useTheme-hook';

function Pagination({
  allResults,
  postPerPage,
  handlePageChange,
}: PaginationProps) {
  const { theme } = useTheme();
  const pages = [];
  for (let i = 1; i <= Math.ceil(allResults / postPerPage); i += 1) {
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
            to={`/search/${elem}`}
            key={elem}
            onClick={() => handlePageChange(elem)}
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
