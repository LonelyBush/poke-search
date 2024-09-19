import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../../api/getPokemons';
import postsReducer from '../redux_slice/redux_slice';

const store = configureStore({
  reducer: {
    pokeStore: postsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
