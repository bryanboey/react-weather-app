import { WEATHER_KEY, WeatherModule } from './weatherSlice';

export const selectWeatherSearch = (state: WeatherModule) =>
  state[WEATHER_KEY].weatherSearchString;

export const selectWeatherSearchHistory = (state: WeatherModule) =>
  state[WEATHER_KEY].weatherSearchHistory;
