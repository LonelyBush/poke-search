import { useLoaderData } from '@remix-run/react';
import styles from './evolution-chain.module.css';
import SearchComponentRow from '../search-component-row/search-component-row';
import { DetailResult } from '../../../interfaces/api_interfaces';
import useTheme from '../../../hooks/useTheme-hook';

function EvolutionChain() {
  const { theme } = useTheme();
  const { pokemon_evolution_chain } = useLoaderData<DetailResult>();

  return (
    <div
      className={`${styles['evolution-chain-wrapper']} ${styles[`${theme}`]}`}
    >
      Evolutions
      <div className={styles['evolution-chain-container']}>
        {pokemon_evolution_chain.map((pokemon, index) => {
          return !Array.isArray(pokemon) ? (
            <SearchComponentRow
              key={pokemon}
              id={index.toString()}
              poke_id={pokemon}
            />
          ) : (
            <div
              key="deep-chain-collection"
              className={
                pokemon.length < 3
                  ? `${styles['deep-chain-collection']} ${styles.small}`
                  : styles['deep-chain-collection']
              }
            >
              {pokemon.map((elem, i) => {
                return (
                  <SearchComponentRow
                    key={elem}
                    id={i.toString()}
                    poke_id={elem}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EvolutionChain;
