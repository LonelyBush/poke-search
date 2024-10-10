import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getAbilityByNumber: builder.query({
      query: (num: string) => `ability/${num}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAbilityByNumberQuery } =
  pokemonApi;
