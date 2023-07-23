import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherDisplayData } from './types';

export const WEATHER_KEY = 'weather';

interface WeatherState {
  weatherSearchString: string;
  weatherSearchHistory: WeatherDisplayData[];
  weatherDisplay?: WeatherDisplayData;
}

export interface WeatherModule {
  [WEATHER_KEY]: WeatherState;
}

const initialState: WeatherState = {
  weatherSearchString: 'Singapore',
  weatherSearchHistory: [],
  weatherDisplay: undefined,
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    // set weather search query
    setWeatherSearch: (state, action: PayloadAction<string>) => {
      state.weatherSearchString = action.payload;
    },
    // add latest search entry to history record
    addWeatherEntryToHistoryRecord: (
      state,
      action: PayloadAction<WeatherDisplayData>
    ) => {
      state.weatherSearchHistory = [
        ...state.weatherSearchHistory,
        action.payload,
      ];
    },
    // set history entry as display data [not in use]
    setWeatherDisplay: (state, action: PayloadAction<WeatherDisplayData>) => {
      state.weatherDisplay = action.payload;
    },
    // delete display data
    deleteWeatherDisplayData: (
      state,
      action: PayloadAction<WeatherDisplayData>
    ) => {
      state.weatherSearchHistory = state.weatherSearchHistory.filter(
        (history) => history.id !== action.payload.id
      );
    },
  },
});

export const {
  setWeatherSearch,
  addWeatherEntryToHistoryRecord,
  setWeatherDisplay,
  deleteWeatherDisplayData,
} = weatherSlice.actions;
