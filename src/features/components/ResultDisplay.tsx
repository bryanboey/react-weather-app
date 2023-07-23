import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import cloud from '../../assets/cloud.png';
import sun from '../../assets/sun.png';
import { selectWeatherDisplay } from '../selector';

export default function ResultDisplay() {
  const weather = useSelector(selectWeatherDisplay);

  return (
    <>
      {weather !== undefined ? (
        <Grid container spacing={0}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: '600' }}>
                    Today's Weather
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: '800', color: '#75388a' }}
                  >
                    {weather.temp}°
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: '400' }}>
                    H: {weather.tempMax}° L: {weather.tempMin}°
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              textAlign="right"
              sx={{
                transform: 'translateY(-42%)',
                position: 'absolute',
                right: '10px',
              }}
            >
              <img
                className="weatherIcon"
                alt="weather"
                src={weather.main === 'Clouds' ? cloud : sun}
                width="85%"
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ color: '#636363' }}
          >
            <Typography variant="caption" sx={{ fontWeight: '700' }}>
              {weather.location}
            </Typography>

            <Typography variant="caption">{weather.dateTime}</Typography>

            <Typography variant="caption">
              Humidity: {weather.humidity}%
            </Typography>

            <Typography variant="caption">{weather.main}</Typography>
          </Grid>
        </Grid>
      ) : (
        <>Search a Country's weather</>
      )}
    </>
  );
}
