import { createTheme } from '@mui/material/styles';
import { colors } from './variables';

const theme = createTheme({
  palette: {
    ...colors,
  },
});

export default theme;
