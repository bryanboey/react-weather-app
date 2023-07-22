import React, { useEffect } from 'react';
import SearchBar from '../features/components/SearchBar';
import { Box, Container, styled } from '@mui/material';
import ResultDisplay from '../features/components/ResultDisplay';
import HistoryTable from '../features/components/HistoryTable';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeatherSearch } from '../features/selector';
import { useGetWeatherQuery } from '../services/weather/getWeather';
import { addWeatherEntryToHistoryRecord } from '../features/weatherSlice';

const Root = styled(Box)(() => ({
  marginTop: '100px',
  background: 'rgba(255, 255, 255, 0.25)',
  padding: '1.5rem',
  border: 'rgba(255, 255, 255, 0.25) solid 1px',
  borderRadius: '1.5rem',
}));

export default function Weather() {
  const dispatch = useDispatch();
  const search = useSelector(selectWeatherSearch);
  const { data, isSuccess, isError } = useGetWeatherQuery(search, {
    skip: !search,
  });

  useEffect(() => {
    if (data) {
      dispatch(addWeatherEntryToHistoryRecord(data));
    }
  }, [data, dispatch]);

  return (
    <Box sx={{ margin: '25px 0px' }}>
      <Container maxWidth="sm">
        <SearchBar />
        <Root>
          {isSuccess && <ResultDisplay data={data} />}
          {isError && <>Something went wrong..</>}
          <HistoryTable />
        </Root>
      </Container>
    </Box>
  );
}
