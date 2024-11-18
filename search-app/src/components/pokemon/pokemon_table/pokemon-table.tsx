import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import styles from './pokemon-table-style.module.css';
import { DetailResult } from '../../../interfaces/api_interfaces';
import CloseBtn from '../../ui/close_btn/close_btn';
import { useGetAbilityByNumberQuery } from '../../../api/getPokemons';
import useTheme from '../../../hooks/useTheme-hook';

function PokemonTable() {
  const { theme } = useTheme();
  const { pokemon_data, pokemon_species } = useLoaderData<DetailResult>();
  const [show, setShow] = useState<boolean>(false);
  const [ability, setAbility] = useState<string>('');
  const { data } = useGetAbilityByNumberQuery(ability);
  const filteredAbilites = pokemon_data.abilities.filter(
    (elem) => elem.is_hidden === false,
  );
  let descriptionBlock;
  const handleOpenAbilityDetails = (str: string) => {
    setShow(true);
    setAbility(str);
  };
  const handleCloseAbilityDetails = () => {
    setShow(false);
    setAbility('');
  };
  if (
    data !== undefined &&
    Object.prototype.hasOwnProperty.call(data, 'flavor_text_entries')
  ) {
    const { name, flavor_text_entries } = data;
    descriptionBlock = (
      <div className={styles['ability-content-block']}>
        <p className={styles['ability-title']}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <p className={styles['ability-description']}>
          {flavor_text_entries !== undefined
            ? flavor_text_entries
                .find(
                  (elem: typeof flavor_text_entries) =>
                    elem.language.name === 'en',
                )
                ?.flavor_text.replace('\f', ' ')
            : null}
        </p>
      </div>
    );
  }
  return (
    <div
      className={`${styles['pokemon-table-container']} ${styles[`${theme}`]}`}
    >
      <div className={styles['pokemon-weight-height-column']}>
        <div>
          Height
          <p>{pokemon_data.height / 10} m</p>
        </div>
        <div>
          Weight
          <p>{pokemon_data.weight / 10} kg</p>
        </div>
      </div>
      <div className={styles['pokemon-shape-abilities-column']}>
        {pokemon_species.shape !== null && (
          <div>
            Shape
            <p>
              {pokemon_species.shape.name.charAt(0).toUpperCase() +
                pokemon_species.shape.name.slice(1)}
            </p>
          </div>
        )}

        <div>
          Abilities
          {filteredAbilites.map((elem, i) => (
            <p
              aria-label={`ability-pointer-${i}`}
              className={styles['ability-pointer-select']}
              onClick={() => handleOpenAbilityDetails(elem.ability.name)}
              key={elem.ability.name}
            >
              {elem.ability.name.charAt(0).toUpperCase() +
                elem.ability.name.slice(1)}
              <FaRegCircleQuestion />
            </p>
          ))}
        </div>
      </div>
      <div
        aria-label="ability-description"
        className={`${styles['ability-description-block']} ${styles[`${theme}`]} ${show ? styles.open : ''}`}
      >
        <div className={styles['ability-header-block']}>
          Ability info
          <CloseBtn onClick={() => handleCloseAbilityDetails()} />
        </div>
        {descriptionBlock}
      </div>
    </div>
  );
}

export default PokemonTable;
