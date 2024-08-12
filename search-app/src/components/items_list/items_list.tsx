import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './items_list_style.module.css';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import EmptySearchResult from '../empry-search-result/empty-search-result';
import Pagination from '../pagination/pagination-items-list';
import SearchComponentRow from '../search-component-row/search-component-row';
import { useGetAllPokemonQuery } from '../../api/getPokemons';
import useSearchQuery from '../../hooks/useSearchQuery-hook';
import useTheme from '../../hooks/useTheme-hook';

function ItemsList({ searchValue }: ItemsListProps) {
  const { data, isLoading } = useGetAllPokemonQuery('300', {
    refetchOnMountOrArgChange: true,
  });
  const { searchQueryFromLS, setSearchQueryToLS } = useSearchQuery();
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(20);
  const [hasError, setError] = useState<boolean>(false);
  const { pageNum } = useParams();

  let resultsLength;
  let itemListComponent;
  let indexOfLastPage: number;
  let firstPostIndex: number;
  let currentPosts: PokeResult[];

  const getSearchQueryData = (
    searchQuery: string,
    results: PokeResult[],
  ): PokeResult[] => {
    setSearchQueryToLS(searchQuery);
    const changedQuery = searchQuery.trim().toLowerCase();
    return results.filter((elem: PokeResult) =>
      elem.name.includes(changedQuery),
    );
  };
  if (data !== undefined) {
    const { results } = data as PokeCall;
    const getFilteredResults = getSearchQueryData(
      searchValue.length > 0 ? searchValue : searchQueryFromLS,
      results,
    );
    resultsLength = getFilteredResults.length;
    indexOfLastPage = currentPage * postPerPage;
    firstPostIndex = indexOfLastPage - postPerPage;
    currentPosts = getFilteredResults.slice(firstPostIndex, indexOfLastPage);
    if (currentPosts.length === 0) {
      itemListComponent = <EmptySearchResult />;
    } else {
      itemListComponent = currentPosts.map((elem, index) => {
        return (
          <SearchComponentRow
            key={elem.url}
            id={index.toString()}
            name={elem.name}
          />
        );
      });
    }
  }
  useEffect(() => {
    if (pageNum) {
      if (Number.isNaN(Number(pageNum)) || Number(pageNum) > indexOfLastPage) {
        setError(true);
      } else {
        setCurrentPage(Number(pageNum));
      }
    } else {
      setCurrentPage(1);
    }
  }, [searchValue, pageNum]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  if (hasError) {
    throw new Error('Route error, dummy');
  }

  return (
    <>
      <div
        data-testid="items-list"
        className={`${styles[`items-list-container`]} ${styles[`${theme}`]}`}
      >
        {isLoading ? <LoadingSpinner /> : itemListComponent}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        allResults={resultsLength === undefined ? 0 : resultsLength}
        postPerPage={postPerPage}
      />
    </>
  );
}
export default ItemsList;
