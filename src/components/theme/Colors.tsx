import * as React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../themes/variables';
import { ThemeTable } from './Theme';

const createExampleCell = () => {
  const Component = (value: any) => {
    return <Box sx={{ display: 'inline-block', width: 50, height: 50, backgroundColor: value }} />;
  };
  return Component;
};

export const Colors = () => {
  return (
    <Box sx={{ width: '100%', px: '6rem', py: '3rem' }}>
      <ThemeTable data={colors} exampleCell={createExampleCell()} />
    </Box>
  );
};
