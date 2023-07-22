import { Box, Typography, styled } from '@mui/material';
import { fontWeight } from '@mui/system';

const FlexBox = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#757575',
}));

export default function ResultDisplay() {
  return (
    <>
      <Typography variant="body2">Today's Weather</Typography>
      <Typography variant="h3">26°</Typography>
      <Typography variant="body2">H: 29° L: 26°</Typography>
      <FlexBox>
        <Typography variant="caption" sx={{ fontWeight: '600' }}>
          Johor, MY
        </Typography>
        <Typography variant="caption">01-09-2022 09:41am</Typography>
        <Typography variant="caption">Humidity: 58%</Typography>
        <Typography variant="caption">Clouds</Typography>
      </FlexBox>
    </>
  );
}
