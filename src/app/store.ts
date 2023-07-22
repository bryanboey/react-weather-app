import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiSlice } from '../services/apiSlice';
import { WEATHER_KEY, weatherSlice } from '../features/weatherSlice';

export const store = configureStore({
  reducer: {
    [WEATHER_KEY]: weatherSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
