export interface PokeResult {
  name: string;
  url: string;
}

export interface PokeCall {
  results: PokeResult[];
}

export interface LoaderResponse {
  currentPosts: PokeResult[];
  resultsLength: number;
}

export interface PokeStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokeType {
  type: {
    name: string;
  };
}

export interface PokeFlavor {
  language: {
    name: string;
  };
  flavor_text: string;
}

export interface PokeSpecies {
  flavor_text_entries: PokeFlavor[];
}
