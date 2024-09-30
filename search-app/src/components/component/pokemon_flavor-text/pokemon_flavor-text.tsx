import { useLoaderData } from '@remix-run/react';
import { DetailResult, PokeSpecies } from '../../../interfaces/api_interfaces';
import styles from './pokemon-flavor-text.module.css';

function PokemonFlavorText() {
  const { pokemon_species } = useLoaderData<DetailResult>();
  let flavorTextEn;
  if (pokemon_species !== undefined) {
    const { flavor_text_entries } = pokemon_species as PokeSpecies;
    flavorTextEn =
      flavor_text_entries !== undefined
        ? flavor_text_entries
            .find((elem) => elem.language.name === 'en')
            ?.flavor_text.replace('\f', ' ')
        : null;
  }
  return (
    <div className={styles['flavor-text']}>
      {flavorTextEn !== null ? flavorTextEn : 'Sorry :c No text provided'}
    </div>
  );
}

export default PokemonFlavorText;
