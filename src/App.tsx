import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './pages/Weather';
import { ThemeProvider } from '@emotion/react';
import { Box, createTheme, makeStyles } from '@mui/material';

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url("/assets/bg-dark.png")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <Weather />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
