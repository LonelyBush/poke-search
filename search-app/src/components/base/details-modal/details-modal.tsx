/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useLoaderData } from '@remix-run/react';
import styles from './details-modal-style.module.css';
import PokemonStats from '../../pokemon/pokemon_stats/pokemon_stats';
import PokemonTypes from '../../pokemon/pokemon_types/pokemon_types';
import PokemonFlavorText from '../../pokemon/pokemon_flavor-text/pokemon_flavor-text';
import CloseBtn from '../../ui/close_btn/close_btn';
import useTheme from '../../../hooks/useTheme-hook';
import PokemonWeakness from '../../pokemon/pokemon_weakness/pokemon-weakness';
import EvolutionChain from '../../pokemon/evolution_chain/evolution-chain';
import { DetailResult } from '../../../interfaces/api_interfaces';
import PokemonTable from '../../pokemon/pokemon_table/pokemon-table';

function DetailsModal() {
  const { theme } = useTheme();
  const { pokemon_data } = useLoaderData<DetailResult>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pageNum } = useParams();
  const handleClose = () => {
    navigate(`/page/${pageNum}?${searchParams}`);
  };
  return (
    <div id="detail" className={`${styles['detail-container-overlay']}`}>
      <div className={`${styles['item-container']} ${styles[`${theme}`]}`}>
        <div className={styles['head-section']}>
          <h3>
            {pokemon_data.name.charAt(0).toUpperCase() +
              pokemon_data.name.slice(1)}
          </h3>
          <CloseBtn onClick={handleClose} />
        </div>
        <div className={styles['content-section']}>
          <div className={styles['poke-img-container']}>
            <img
              alt="pokemon-pic"
              src={pokemon_data.sprites.other['official-artwork'].front_default}
            />
            <PokemonStats stats={pokemon_data.stats} />
          </div>

          <div className={styles['name-type-container']}>
            <PokemonFlavorText />
            <PokemonTable />
            Type
            <PokemonTypes types={pokemon_data.types} />
            Weaknesses
            <PokemonWeakness />
          </div>
        </div>
        <div className={styles['evolution-section']}>
          <EvolutionChain />
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
