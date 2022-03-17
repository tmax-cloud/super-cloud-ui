import * as React from 'react';
import { styled, MenuItem, MenuItemProps } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.select.itemHoverBg,
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
    '&:focus': {
      backgroundColor: '#f0f0f0',
    },
  },
}));

export const SelectItem = (props: MenuItemProps) => {
  return (
    <ThemeWrapper>
      <StyledMenuItem {...props} />
    </ThemeWrapper>
  );
};
