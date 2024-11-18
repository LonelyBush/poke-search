import { PokemonTypesProps } from '../../../interfaces/props_interfaces';
import styles from './pokemon_types_style.module.css';

function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <div className={styles['pokemon-type-container']}>
      {types.map((elem) => {
        const { type } = elem;
        return (
          <div
            key={type.name}
            className={`${styles[`type-icon`]} ${styles[`type-${type.name}`]}`}
          >
            {type.name.slice(0, 3)}
          </div>
        );
      })}
    </div>
  );
}

export default PokemonTypes;
