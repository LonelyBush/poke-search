import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { Form } from '@remix-run/react';
import { removeAllPokemons } from '../../../lib/redux_slice/redux_slice';
import styles from './search_bar-style.module.css';
import CloseBtn from '../../ui/close_btn/close_btn';
import ToggleSwitch from '../../ui/toggle_switch/toggle_switch';
import { RootState } from '../../../lib/store/store';
import DownloadCSV from '../../../csv/download_csv';
import useTheme from '../../../hooks/useTheme-hook';

function SearchBar() {
  const { theme, setTheme } = useTheme();
  const posts = useSelector((state: RootState) => state.pokeStore);
  const dispatch = useDispatch();
  const [queryState, setQueryState] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.currentTarget.value);
  };
  const handleOnChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.checked ? 'dark' : '');
  };
  const handleClearAll = () => {
    dispatch(removeAllPokemons());
  };
  return (
    <div className={`${styles[`search-bar-container`]} ${styles[`${theme}`]}`}>
      <div className={styles['title-form-wrapper']}>
        <div className={styles['title-section']}>
          <h2>Poke Search</h2>
          <ToggleSwitch onChange={handleOnChangeSwitch} />
        </div>

        <Form action="/page/1" method="get" className={styles['search-form']}>
          <div className={styles['input-wrapper']}>
            <input
              onFocus={() => setFocus(true)}
              onChange={handleOnChange}
              data-focused={focus.toString()}
              value={queryState}
              name="query"
              type="text"
              pattern="^\S+$"
            />
            {queryState !== '' && focus ? (
              <CloseBtn
                onClick={() => {
                  setFocus(false);
                  setQueryState('');
                }}
              />
            ) : null}
          </div>
          <button
            className={`${styles[`submit-btn`]} ${styles[`${theme}`]}`}
            type="submit"
          >
            Search
          </button>
        </Form>
        {posts.length !== 0 ? (
          <div className={styles['counter-section']}>
            <div
              className={styles['items-counter']}
            >{`${posts.length} items`}</div>
            <button
              onClick={handleClearAll}
              className={`${styles[`submit-btn`]} ${styles[`${theme}`]}`}
              type="button"
            >
              Clear All
            </button>
            <DownloadCSV
              className={`${styles[`submit-btn`]} ${styles[`${theme}`]}`}
              data={posts}
              itemsCount={posts.length.toString()}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBar;
