/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRouter } from 'next/router';
import styles from './search_item_style.module.css';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';
import CloseBtn from '../ui/close_btn/close_btn';
import useTheme from '../../hooks/useTheme-hook';

function SearchItem() {
  const { theme } = useTheme();
  const router = useRouter();
  const { data, isLoading } = useGetPokemonByNameQuery(
    router.query.pokeName !== undefined &&
      typeof router.query.pokeName === 'string'
      ? router.query.pokeName
      : '',
  );
  const handleClose = () => {
    router.push(`/search/${router.query.pageNum}`);
  };
  return isLoading ? (
    <LoadingSpinner />
  ) : data ? (
    <div
      id="detail"
      className={`${styles[`item-container`]} ${styles[`${theme}`]}`}
    >
      <div className={styles['poke-img-container']}>
        <img
          alt="pokemon-pic"
          src={data.sprites.other['official-artwork'].front_default}
        />
        <PokemonStats stats={data.stats} />
      </div>

      <div className={styles['name-type-container']}>
        <h3>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
        <PokemonTypes types={data.types} />
        {data.species.url === '' ? (
          <div>Loading...</div>
        ) : (
          <PokemonFlavorText name={data.name} />
        )}
      </div>
      <CloseBtn onClick={handleClose} customStyle="" />
    </div>
  ) : null;
}

export default SearchItem;
