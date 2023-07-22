import { WeatherResponse } from '../services/types';

export const transformDataToDisplayData = (data: WeatherResponse) => ({
  location: data.name,
  temp: data.main.temp.toFixed(),
  tempMax: data.main.temp_max.toFixed(),
  tempMin: data.main.temp_min.toFixed(),
  humidity: data.main.humidity,
  main: data.weather[0].main,
  dateTime: new Date(data.dt * 1000).toLocaleString(),
});
