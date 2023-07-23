import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherSearch } from '../weatherSlice';

export default function SearchBar() {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setWeatherSearch(searchString));
    setSearchString('');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'row', flex: 1 }}
      >
        <TextField
          type="text"
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
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <IconButton
          type="submit"
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
      </form>
    </Box>
  );
}
