import { json, LoaderFunctionArgs } from '@remix-run/server-runtime';
import { PokeType } from '../../interfaces/api_interfaces';
import getIdFromURL from '../../utils/funcs/get-id-from-url';
import DetailsModal from '../../components/base/details-modal/details-modal';

export async function loader({ params }: LoaderFunctionArgs) {
  const { pokeName } = params;
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
    );
    const pokemonResult = await pokemonResponse.json();
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonResult.species.name}`,
    );
    const speciesResult = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesResult.evolution_chain.url);
    const evolutionResult = await evolutionResponse.json();
    const weakness = [
      ...new Set([
        ...(
          await Promise.all(
            pokemonResult.types.map(async (elem: PokeType) => {
              try {
                const response = await fetch(
                  `https://pokeapi.co/api/v2/type/${elem.type.name}`,
                );
                const { damage_relations } = await response.json();
                return damage_relations.double_damage_from.map(
                  (dmgType: { name: string }) => dmgType.name,
                );
              } catch (err) {
                if (err instanceof Error) {
                  console.log(err);
                }
              }
              return elem;
            }),
          )
        ).flat(),
      ]),
    ];
    const evoChain: (string | string[])[] = [];
    const getEvo = (arr: typeof evolutionResult.chain) => {
      if (arr[0].evolves_to.length > 0) {
        evoChain.push(getIdFromURL(arr[0].species.url));
        if (arr[0].evolves_to.length > 1) {
          const deepChain = [] as string[];
          arr[0].evolves_to.map(
            (elem: typeof evolutionResult.chain.evolves_to) =>
              deepChain.push(getIdFromURL(elem.species.url)),
          );
          evoChain.push(deepChain);
          return 0;
        }
        getEvo(arr[0].evolves_to);
      } else {
        return evoChain.push(getIdFromURL(arr[0].species.url));
      }
      return arr;
    };
    getEvo([evolutionResult.chain]);
    return json({
      pokemon_data: pokemonResult,
      pokemon_species: speciesResult,
      pokemon_weakness: weakness,
      pokemon_evolution_chain: evoChain,
    });
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { pokeName };
}

export default function Details() {
  return <DetailsModal />;
}
