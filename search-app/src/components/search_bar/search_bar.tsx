/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useState } from 'react';
import { removeAllPokemons } from '../../redux_slice/redux_slice';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import styles from './search_bar-style.module.css';
import useSearchQuery from '../../hooks/useSearchQuery-hook';
import ToggleSwitch from '../ui/toggle_switch/toggle_switch';
import { RootState } from '../../store/store';
import DownloadCSV from '../../csv/download_csv';
import useTheme from '../../hooks/useTheme-hook';

function SearchBar({ handleSubmit, searchValue }: SearchBarProps) {
  const posts = useSelector((state: RootState) => state.pokeStore);
  const dispatch = useDispatch();
  const { setSearchQueryToLS } = useSearchQuery();
  const [queryState, setQueryState] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.currentTarget.value);
  };
  const handleOnChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.checked ? 'dark' : '');
  };
  const handleClearAll = () => {
    dispatch(removeAllPokemons());
  };
  useEffect(() => {
    setQueryState(searchValue!);
  }, [searchValue]);
  return (
    <div
      className={`${styles[`search-bar-container`]} ${theme !== '' ? styles[`${theme}`] : ''}`}
    >
      <div className={styles['title-section']}>
        <h2>Poke Search</h2>
        <ToggleSwitch
          onChange={handleOnChangeSwitch}
          defaultChecked={theme === 'dark'}
        />
      </div>

      <form className={styles['search-form']} onSubmit={handleSubmit}>
        <div className={styles['input-wrapper']}>
          <input
            className={styles['search-input']}
            onFocus={() => setFocus(true)}
            onChange={handleOnChange}
            data-focused={focus.toString()}
            value={queryState}
            name="search-input"
            type="text"
            pattern="^\S+$"
          />
          <span>
            *your search query must have no spaces and at least one character
          </span>
          {queryState !== '' && focus ? (
            <button
              className={`${styles[`cross-btn`]} ${styles[`${theme}`]}`}
              onClick={() => {
                setFocus(false);
                setQueryState('');
                setSearchQueryToLS('');
              }}
              type="button"
            />
          ) : null}
        </div>
        <button
          className={`${styles[`submit-btn`]} ${styles[`${theme}`]}`}
          type="submit"
        >
          Search
        </button>
      </form>
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
  );
}

export default SearchBar;
