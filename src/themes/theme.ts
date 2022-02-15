import { createTheme } from '@mui/material/styles';
import { colors, spaces, typography } from './variables';

const theme = createTheme({
  palette: {
    ...colors,
  },
  typography,
  spaces,
});

export default theme;
