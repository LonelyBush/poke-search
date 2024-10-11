import { PokeResult } from '../../interfaces/api_interfaces';
import getIdFromURL from './get-id-from-url';

const getSearchQueryData = (
  searchQuery: string,
  responsedResults: PokeResult[],
): PokeResult[] => {
  const changedQuery = searchQuery.trim().toLowerCase();
  return responsedResults.filter((elem: PokeResult) =>
    Number(changedQuery)
      ? getIdFromURL(elem.url).startsWith(changedQuery)
      : elem.name.startsWith(changedQuery),
  );
};

export default getSearchQueryData;
