import { PokeResult } from '../interfaces/api_interfaces';

const getSearchQueryData = (
  searchQuery: string,
  responsedResults: PokeResult[],
): PokeResult[] => {
  const changedQuery = searchQuery.trim().toLowerCase();
  return responsedResults.filter((elem: PokeResult) =>
    elem.name.startsWith(changedQuery),
  );
};

export default getSearchQueryData;
