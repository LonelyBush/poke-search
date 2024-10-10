import { createSlice } from '@reduxjs/toolkit';
import PayloadInterface from '../../interfaces/payload_interface';

const initialState: PayloadInterface[] = [];

const postSlice = createSlice({
  name: 'pokeStore',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removePokemon: (state, action) => {
      return state.filter((elem) => {
        return elem.name !== action.payload.name;
      });
    },
    removeAllPokemons: () => {
      return [];
    },
  },
});

export const { addPokemon, removePokemon, removeAllPokemons } =
  postSlice.actions;

export default postSlice.reducer;
