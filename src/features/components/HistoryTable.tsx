import { Box, Typography, styled } from '@mui/material';
import React, { useMemo } from 'react';
import HistoryItem from './HistoryItem';
import { useSelector } from 'react-redux';
import { selectWeatherSearchHistory } from '../selector';

const Root = styled(Box)(() => ({
  marginTop: '0.5rem',
  background: 'rgba(255, 255, 255, 0.15)',
  padding: '1rem',
  borderRadius: '1rem',
}));

export default function HistoryTable() {
  const searchHistory = useSelector(selectWeatherSearchHistory);
  const tableData = useMemo(() => searchHistory, [searchHistory]);
  return (
    <Root>
      <Typography variant="body2">Search History</Typography>
      {tableData.length === 0 && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption">No Records</Typography>
        </Box>
      )}
      {tableData.length > 0 &&
        tableData.map((entry, i) => <HistoryItem key={i} entry={entry} />)}
    </Root>
  );
}
