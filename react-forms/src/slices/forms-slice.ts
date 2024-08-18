import { createSlice } from '@reduxjs/toolkit';

type PayloadType = {
  name: string;
  gender: string;
  age: string;
  email: string;
  country: string;
  picture: string;
  password: string;
  formType: string;
};

const initialState: PayloadType[] = [];
const postSlice = createSlice({
  name: 'formsList',
  initialState,
  reducers: {
    addNewFormValues: (state, action) => {
      state.push(action.payload);
      return state;
    },
    getAllFormsValues: (state) => {
      return state;
    },
  },
});

export const { addNewFormValues, getAllFormsValues } = postSlice.actions;

export default postSlice.reducer;
