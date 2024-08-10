import Link from 'next/link';
import { useRouter } from 'next/router';
import { PaginationProps } from '../../interfaces/props_interfaces';
import styles from './pagination-items-style.module.css';
import useTheme from '../../hooks/useTheme-hook';

function Pagination({
  allResults,
  postPerPage,
  handlePageChange,
}: PaginationProps) {
  const router = useRouter();
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
          <Link
            className={`${styles[`pagination-button`]} ${styles[`${theme}`]} ${router.query.pageNum === elem.toString() ? styles.active : ''}`}
            href={`/search/${elem}`}
            key={elem}
            onClick={() => handlePageChange(elem)}
            type="button"
          >
            {elem}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
