import { useNavigation } from 'react-router-dom';
import { useLoaderData } from '@remix-run/react';
import styles from './items_list_style.module.css';
import { LoaderResponse } from '../../../interfaces/api_interfaces';
import LoadingSpinner from '../../component/loading_spinner/loading_spinner';
import EmptySearchResult from '../../component/empry-search-result/empty-search-result';
import useTheme from '../../../hooks/useTheme-hook';
import SearchComponentRow from '../../component/search-component-row/search-component-row';

function ItemsList() {
  const { currentPosts } = useLoaderData<LoaderResponse>();
  const navigation = useNavigation();
  const { theme } = useTheme();
  let itemListComponent;
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

  return (
    <div
      data-testid="items-list"
      className={`${styles[`items-list-container`]} ${styles[`${theme}`]}`}
    >
      {navigation.state === 'loading' ? <LoadingSpinner /> : itemListComponent}
    </div>
  );
}
export default ItemsList;
