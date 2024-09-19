import { useEffect, useState } from 'react';

function useSearchQuery() {
  const [searchQueryFromLS, setSearchQuery] = useState(() => {
    const queryFromLS = window.localStorage.getItem('search-value');
    return queryFromLS !== null ? queryFromLS : '';
  });

  const setSearchQueryToLS = (query: string) => {
    localStorage.setItem('search-value', query);
  };
  useEffect(() => {
    const searchQueryLS = window.localStorage.getItem('search-value');
    if (searchQueryLS !== null) {
      setSearchQuery(searchQueryLS);
    }
  }, [searchQueryFromLS]);
  return { searchQueryFromLS, setSearchQueryToLS };
}

export default useSearchQuery;
