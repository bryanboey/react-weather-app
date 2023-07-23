import { Box, Container, styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HistoryTable from '../features/components/HistoryTable';
import ResultDisplay from '../features/components/ResultDisplay';
import SearchBar from '../features/components/SearchBar';
import { selectWeatherSearch } from '../features/selector';
import { transformDataToDisplayData } from '../features/transformer';
import {
  addWeatherEntryToHistoryRecord,
  setWeatherDisplay,
} from '../features/weatherSlice';
import { useGetWeatherQuery } from '../services/weather/getWeather';

const Root = styled(Box)(() => ({
  marginTop: '100px',
  background: 'rgba(255, 255, 255, 0.25)',
  padding: '1.5rem',
  border: 'rgba(255, 255, 255, 0.25) solid 1px',
  borderRadius: '1.5rem',
  position: 'relative',
}));

export default function Weather() {
  const dispatch = useDispatch();
  const search = useSelector(selectWeatherSearch);
  const { data, isSuccess, isError } = useGetWeatherQuery(search, {
    skip: !search || search === '',
  });

  useEffect(() => {
    if (data) {
      const transformedData = transformDataToDisplayData(data);
      dispatch(addWeatherEntryToHistoryRecord(transformedData));
      dispatch(setWeatherDisplay(transformedData));
    }
  }, [data, dispatch]);

  return (
    <Box sx={{ margin: '25px 0px' }}>
      <Container maxWidth="sm">
        <SearchBar />
        <Root>
          {isSuccess && <ResultDisplay />}
          {isError && <>Something went wrong..</>}
          <HistoryTable />
        </Root>
      </Container>
    </Box>
  );
}
