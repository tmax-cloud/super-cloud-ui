import * as React from 'react';
import { Box } from '@mui/material';
import { boxShadows } from '../../themes/variables';
import { ThemeTable } from './Theme';

const createExampleCell = () => {
  const Component = (value: any) => {
    return <Box sx={{ display: 'inline-block', width: 50, height: 50, boxShadow: value }} />;
  };
  return Component;
};

export const BoxShadows = () => {
  return (
    <Box sx={{ width: '100%', px: '6rem', py: '3rem' }}>
      <ThemeTable data={boxShadows} exampleCell={createExampleCell()} />
    </Box>
  );
};
