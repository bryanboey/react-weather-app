import DeleteIcon from '@mui/icons-material/Delete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Grid, IconButton, Typography, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { WeatherDisplayData } from '../types';
import { deleteWeatherDisplayData, setWeatherSearch } from '../weatherSlice';

const Root = styled(Grid)(() => ({
  marginTop: '1rem',
  background: 'rgba(255, 255, 255, 0.25)',
  padding: '0.5rem 1rem',
  border: 'rgba(255, 255, 255, 0.25)',
  borderRadius: '0.75rem',
}));

type HistoryItemProps = {
  entry: WeatherDisplayData;
};

export default function HistoryItem({ entry }: HistoryItemProps) {
  const dispatch = useDispatch();

  return (
    <Root
      container
      spacing={0}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs md>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="body2">{entry.location}</Typography>
          <Typography variant="caption">{entry.dateTime}</Typography>
        </Grid>
      </Grid>

      <Grid item xs="auto" md="auto">
        <IconButton
          size="small"
          sx={{
            margin: '0px 5px',
            borderRadius: '50px',
            color: '#75388a',
          }}
          onClick={() => dispatch(setWeatherSearch(entry.location))}
        >
          <SearchOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          sx={{
            margin: '0px 5px',
            borderRadius: '50px',
            color: '#75388a',
          }}
          onClick={() => dispatch(deleteWeatherDisplayData(entry))}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Root>
  );
}
