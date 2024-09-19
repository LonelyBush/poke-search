import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { getAllPokemon } from '../../api/getPokemons';
import ItemsList from '../../components/items_list/items_list';
import getSearchQueryData from '../../utils/get-search-query-data';
import { PokeCall } from '../../interfaces/api_interfaces';
import Pagination from '../../components/pagination/pagination-items-list';

export async function loader({ request, params }: LoaderFunctionArgs) {
  const { pageNum } = params;
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('query');
  const postPerPage = 20;
  let currentPosts;
  let resultsLength;
  try {
    const response = await getAllPokemon(1302);
    if (!response) {
      throw new Error('Fetch failed');
    }
    const data = (await response.json()) as PokeCall;
    if (data !== undefined) {
      const { results } = data;
      const getFilteredResults = getSearchQueryData(searchQuery || '', results);
      resultsLength = getFilteredResults.length;
      const indexOfLastPage = Number(pageNum) * postPerPage;
      const firstPostIndex = indexOfLastPage - postPerPage;
      currentPosts = getFilteredResults.slice(firstPostIndex, indexOfLastPage);
    }
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { currentPosts, resultsLength };
}

function SearchPage() {
  return (
    <>
      <ItemsList />
      <Pagination />
    </>
  );
}

export default SearchPage;
