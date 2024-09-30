import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
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
    getPokemonBySpeciesByName: builder.query({
      query: (name: string) => `pokemon-species/${name}`,
    }),
  }),
});

export const {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonByNumQuery,
  useGetPokemonBySpeciesByNameQuery,
} = pokemonApi;

export const getAllPokemon = async (limit: number) => {
  const call = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
  );
  return call;
};
