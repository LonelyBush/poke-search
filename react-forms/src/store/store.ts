import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import postsReducer from '../slices/countries-slice';
import formReducer from '../slices/forms-slice';

const store = configureStore({
  reducer: {
    countryList: postsReducer,
    formsList: formReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
