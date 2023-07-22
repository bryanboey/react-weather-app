import { Box, Typography, styled } from '@mui/material';
import { WeatherResponse } from '../../services/types';
import { useMemo } from 'react';
import { transformDataToDisplayData } from '../transformer';

type ResultDisplayProps = {
  data: WeatherResponse;
};

const FlexBox = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#757575',
}));

export default function ResultDisplay({ data }: ResultDisplayProps) {
  const transformedData = useMemo(
    () => transformDataToDisplayData(data),
    [data]
  );
  return (
    <>
      <Typography variant="body2">Today's Weather</Typography>
      <Typography variant="h3">{transformedData.temp}°</Typography>
      <Typography variant="body2">
        {' '}
        H: {transformedData.tempMax}° L: {transformedData.tempMin}°
      </Typography>
      <FlexBox>
        <Typography variant="caption" sx={{ fontWeight: '600' }}>
          {transformedData.location}
        </Typography>
        <Typography variant="caption">{transformedData.dateTime}</Typography>
        <Typography variant="caption">
          Humidity: {transformedData.humidity}%
        </Typography>
        <Typography variant="caption">{transformedData.main}</Typography>
      </FlexBox>
    </>
  );
}
