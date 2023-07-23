import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
import './App.css';
import Weather from './pages/Weather';

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
    fontFamily: [
      'Noto Sans',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
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
