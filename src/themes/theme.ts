import { createTheme } from '@mui/material/styles';
import { colors, typography } from './variables';

const theme = createTheme({
  palette: {
    ...colors,
  },
  typography,
});

export default theme;
