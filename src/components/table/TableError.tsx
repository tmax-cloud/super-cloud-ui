import React from 'react';
import { Box } from '@mui/material';

const ErrorBanner = ({ message }: ErrorBannerProps) => {
  return <Box data-testid="error-banner">{message}</Box>;
};

export default ErrorBanner;

interface ErrorBannerProps {
  message: string;
}
