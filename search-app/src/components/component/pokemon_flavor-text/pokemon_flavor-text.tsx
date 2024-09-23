import { PokemonFlavorProps } from '../../../interfaces/props_interfaces';
import { useGetPokemonBySpeciesByNumQuery } from '../../../api/getPokemons';
import { PokeSpecies } from '../../../interfaces/api_interfaces';

function PokemonFlavorText({ name }: PokemonFlavorProps) {
  const { data } = useGetPokemonBySpeciesByNumQuery(name);
  let flavorTextEn;
  if (data !== undefined) {
    const { flavor_text_entries } = data as PokeSpecies;
    flavorTextEn =
      flavor_text_entries !== undefined
        ? flavor_text_entries
            .find((elem) => elem.language.name === 'en')
            ?.flavor_text.replace('\f', ' ')
        : null;
  }
  return (
    <div className="flavor-text">
      {flavorTextEn !== null ? flavorTextEn : 'Sorry :c No text provided'}
    </div>
  );
}

export default PokemonFlavorText;
