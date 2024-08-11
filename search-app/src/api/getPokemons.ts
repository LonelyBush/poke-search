import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    return isHydrateAction(action) ? action.payload[reducerPath] : null;
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: (limit: string) => `pokemon?limit=${limit}&offset=0`,
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonByNum: builder.query({
      query: (num: string) => `pokemon/${num}`,
    }),
    getPokemonBySpeciesByNum: builder.query({
      query: (num: string) => `pokemon-species/${num}`,
    }),
  }),
});

export const {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonByNumQuery,
  useGetPokemonBySpeciesByNumQuery,
} = pokemonApi;
