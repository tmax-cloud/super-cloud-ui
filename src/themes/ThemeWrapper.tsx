import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '.';

const ThemeWrapper = (props: ThemeWrapperProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

interface ThemeWrapperProps {
  children: ReactNode;
}
