import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import HistoryItem from './HistoryItem';
import { useSelector } from 'react-redux';
import { selectWeatherSearchHistory } from '../selector';

const Root = styled(Box)(() => ({
  marginTop: '0.5rem',
  background: 'rgba(255, 255, 255, 0.15)',
  padding: '1rem',
  // border: 'rgba(255, 255, 255, 0.25) solid 1px',
  borderRadius: '1rem',
}));

export default function HistoryTable() {
  const searchHistory = useSelector(selectWeatherSearchHistory);

  return (
    <Root>
      <Typography variant="body2">Search History</Typography>
      {searchHistory.length === 0 && <>No Records</>}
      {searchHistory.length > 0 &&
        searchHistory.map((entry) => (
          <>
            <HistoryItem entry={entry} />
          </>
        ))}
    </Root>
  );
}
