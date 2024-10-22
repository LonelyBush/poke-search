import { PokeStats, PokeType } from './api_interfaces';

export interface StatsContainerProps {
  stats: PokeStats[];
}

export interface PokemonTypesProps {
  types: PokeType[];
}

export interface SearchRowComponentProps {
  poke_id: string;
  id: string;
}
