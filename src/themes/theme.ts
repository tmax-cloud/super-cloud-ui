import { createTheme } from '@mui/material/styles';
import { colors, boxShadows, spaces, typography } from './variables';

const theme = createTheme({
  palette: {
    ...colors,
  },
  typography,
  spaces,
  boxShadows,
});

export default theme;
