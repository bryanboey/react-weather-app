import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResponse } from '../services/types';

export const WEATHER_KEY = 'weather';

interface WeatherState {
  weatherSearchString: string;
  weatherSearchHistory: WeatherResponse[];
}

export interface WeatherModule {
  [WEATHER_KEY]: WeatherState;
}

const initialState: WeatherState = {
  weatherSearchString: 'Singapore',
  weatherSearchHistory: [],
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setWeatherSearch: (state, action: PayloadAction<string>) => {
      console.log('set weather search query', action.payload);
      state.weatherSearchString = action.payload;
    },
    addWeatherEntryToHistoryRecord: (
      state,
      action: PayloadAction<WeatherResponse>
    ) => {
      console.log('adding latest search entry to history record');
      state.weatherSearchHistory = [
        ...state.weatherSearchHistory,
        action.payload,
      ];
    },
  },
});

export const { setWeatherSearch, addWeatherEntryToHistoryRecord} = weatherSlice.actions;
