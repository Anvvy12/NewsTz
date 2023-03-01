import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#42c28d',
      contrastText: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
