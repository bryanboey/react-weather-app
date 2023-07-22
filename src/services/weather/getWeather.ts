import { apiSlice } from '../apiSlice';
import { WeatherResponse } from '../types';

export const getWeather = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: (search) => ({
        url: 'data/2.5/weather',
        params: {
          q: search,
          appid: '7265a694716274c4c568f311ab489be9',
          units: 'metric',
        },
      }),
      providesTags: ['Weather'],
    }),
  }),
});
export const { useGetWeatherQuery } = getWeather;
