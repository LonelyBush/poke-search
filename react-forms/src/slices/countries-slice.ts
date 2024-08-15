import { createSlice } from '@reduxjs/toolkit';
import countryList from './countries-data';

const initialState = countryList;

const postSlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    getAllCountries: (state) => {
      return state;
    },
  },
});

export const { getAllCountries } = postSlice.actions;

export default postSlice.reducer;
