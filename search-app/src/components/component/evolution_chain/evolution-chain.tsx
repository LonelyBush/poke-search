import { useLoaderData } from '@remix-run/react';
import styles from './evolution-chain.module.css';
import SearchComponentRow from '../search-component-row/search-component-row';
import { DetailResult } from '../../../interfaces/api_interfaces';

function EvolutionChain() {
  const { pokemon_evolution_chain } = useLoaderData<DetailResult>();

  return (
    <div className={styles['evolution-chain-container']}>
      Evolution
      {pokemon_evolution_chain.map((pokemon, index) => {
        return (
          <SearchComponentRow
            key={pokemon}
            id={index.toString()}
            name={pokemon}
          />
        );
      })}
    </div>
  );
}

export default EvolutionChain;
