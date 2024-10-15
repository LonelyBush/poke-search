import { useLoaderData } from '@remix-run/react';
import styles from './pokemon-weakness.module.css';
import typeStyles from '../pokemon_types/pokemon_types_style.module.css';
import { DetailResult } from '../../../interfaces/api_interfaces';

function PokemonWeakness() {
  const { pokemon_weakness } = useLoaderData<DetailResult>();
  console.log(pokemon_weakness);
  return (
    <div className={styles['pokemon-weaknesses-container']}>
      {pokemon_weakness &&
        pokemon_weakness.map((weakness) => {
          return (
            <div
              key={weakness}
              className={`${typeStyles[`type-icon`]} ${typeStyles[`type-${weakness}`]}`}
            >
              {weakness.slice(0, 3)}
            </div>
          );
        })}
    </div>
  );
}

export default PokemonWeakness;
