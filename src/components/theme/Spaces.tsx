import * as React from 'react';
import { Box } from '@mui/material';
import { spaces } from '../../themes/variables';
import { ThemeTable } from './Theme';

const createExampleCell = () => {
  const Component = (value: any) => {
    return <Box sx={{ display: 'inline-block', width: value, height: value, backgroundColor: 'black' }} />;
  };
  return Component;
};

export const Spaces = () => {
  return (
    <Box sx={{ width: '100%', px: '6rem', py: '3rem' }}>
      <ThemeTable data={spaces} exampleCell={createExampleCell()} />
    </Box>
  );
};
