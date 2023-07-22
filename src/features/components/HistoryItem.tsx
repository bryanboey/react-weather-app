import { Box, IconButton, Typography, styled } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { WeatherResponse } from '../../services/types';
import { transformDataToDisplayData } from '../transformer';

const Root = styled(Box)(() => ({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
  background: 'rgba(255, 255, 255, 0.25)',
  padding: '0.5rem 1rem',
  border: 'rgba(255, 255, 255, 0.25)',
  borderRadius: '0.75rem',
}));

const ActionButtonContainer = styled(Box)(() => ({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

type HistoryItemProps = {
  entry: WeatherResponse;
};

export default function HistoryItem({ entry }: HistoryItemProps) {
  const transformedData = transformDataToDisplayData(entry);

  return (
    <Root>
      <Typography variant="body2">{transformedData.location}</Typography>
      <ActionButtonContainer>
        <Typography variant="caption">{transformedData.dateTime}</Typography>
        <IconButton
          color="primary"
          size="small"
          sx={{
            margin: '0px 5px',
            borderRadius: '50px',
          }}
        >
          <SearchOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          sx={{
            margin: '0px 5px',
            borderRadius: '50px',
          }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </ActionButtonContainer>
    </Root>
  );
}
