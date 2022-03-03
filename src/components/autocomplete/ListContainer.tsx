import * as React from 'react';
import { Paper, styled } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';

const StyledPaper = styled(Paper)(({ theme }) => ({
  boxShadow: theme.boxShadows.autocomplete.boxShadow,
}));

export const ListContainer = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ThemeWrapper>
      <StyledPaper square {...props} />
    </ThemeWrapper>
  );
};
