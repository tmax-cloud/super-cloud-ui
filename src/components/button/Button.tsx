import * as React from 'react';
import { Button as MuiButton, styled, SxProps, Theme } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import ThemeWrapper from '../../themes/ThemeWrapper';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.button.primaryBg,
  '&:hover': {
    backgroundColor: theme.palette.button.primaryHoverBg,
  },
  '&.Mui-disabled': {
    color: theme.palette.button.disabled,
    backgroundColor: theme.palette.button.disabledBg,
    cursor: 'no-drop',
    pointerEvents: 'auto',
  },
}));

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <ThemeWrapper>
      <StyledButton variant="contained" {...rest}>
        {children}
      </StyledButton>
    </ThemeWrapper>
  );
};

interface BaseProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type ButtonProps = BaseProps & CommonProps & React.DOMAttributes<HTMLButtonElement>;

Button.defaultProps = {
  disabled: false,
};
