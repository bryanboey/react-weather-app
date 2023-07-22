import { Box, IconButton, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SearchBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        size="small"
        fullWidth
        placeholder="Enter a Country/City"
        InputProps={{
          style: {
            background: 'rgba(255, 255, 255, 0.25)',
            borderRadius: '0.75rem',
            border: 'none',
          },
        }}
      />
      <IconButton
        color="primary"
        size="medium"
        sx={{
          margin: '0px 5px',
          borderRadius: '0.75rem',
          background: '#75388a',
          color: 'white',
        }}
      >
        <SearchOutlinedIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
