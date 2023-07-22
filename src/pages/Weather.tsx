import React from 'react';
import SearchBar from '../features/components/SearchBar';
import { Box, Container, styled } from '@mui/material';
import ResultDisplay from '../features/components/ResultDisplay';
import HistoryTable from '../features/components/HistoryTable';

const Root = styled(Box)(() => ({
  marginTop: '100px',
  background: 'rgba(255, 255, 255, 0.25)',
  padding: '1.5rem',
  border: 'rgba(255, 255, 255, 0.25) solid 1px',
  borderRadius: '1.5rem',
}));

export default function Weather() {
  return (
    <Box sx={{ margin: '25px 0px' }}>
      <Container maxWidth="sm">
        <SearchBar />
        <Root>
          <ResultDisplay />
          <HistoryTable />
        </Root>
      </Container>
    </Box>
  );
}
