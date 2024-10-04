import { PokeStats, PokeType } from './api_interfaces';

export interface StatsContainerProps {
  stats: PokeStats[];
}

export interface PokemonTypesProps {
  types: PokeType[];
}

export interface PokemonFlavorProps {
  name: string;
}

export interface PaginationProps {
  postPerPage: number;
  allResults: number;
  handlePageChange: (pageNumber: number) => void;
}

export interface SearchRowComponentProps {
  poke_id: string;
  id: string;
}
