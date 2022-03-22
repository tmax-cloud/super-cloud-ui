import * as React from 'react';
import { Button as MuiButton, styled, SxProps, Theme } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import ThemeWrapper from '../../themes/ThemeWrapper';

export enum ButtonType {
  primary = 'primary',
  link = 'link',
}

const StyledPrimaryButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.button.primaryBackground,
  '&:hover': {
    backgroundColor: theme.palette.button.primaryHoverBackground,
  },
  '&.Mui-disabled': {
    color: theme.palette.button.disabled,
    backgroundColor: theme.palette.button.disabledBackground,
    cursor: 'no-drop',
    pointerEvents: 'auto',
  },
}));

const StyledLinkButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  textDecoration: 'none',
  color: theme.palette.button.link,
  backgroundColor: theme.palette.button.linkBackground,
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.button.linkHover,
    backgroundColor: theme.palette.button.linkBackground,
  },
  '&.Mui-disabled': {
    color: theme.palette.button.disabled,
    backgroundColor: theme.palette.button.linkDisabledBackground,
  },
}));

const PrimaryButton = (props: ButtomCommonProps) => {
  const { children, ...rest } = props;
  return (
    <StyledPrimaryButton variant="contained" {...rest}>
      {children}
    </StyledPrimaryButton>
  );
};

const LinkButton = (props: ButtomCommonProps) => {
  const { children, ...rest } = props;
  return (
    <StyledLinkButton variant="text" {...rest}>
      {children}
    </StyledLinkButton>
  );
};

const Button = (props: ButtonProps) => {
  const { type, ...rest } = props;
  let StyledButton;
  switch (type) {
    case ButtonType.primary:
      StyledButton = <PrimaryButton {...rest} />;
      break;
    case ButtonType.link:
      StyledButton = <LinkButton {...rest} />;
      break;
    default:
      StyledButton = <PrimaryButton {...rest} />;
      break;
  }
  return <ThemeWrapper>{StyledButton}</ThemeWrapper>;
};

export interface ButtonBaseProps {
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

export interface ButtonTypeProps {
  /**
   * Adds button variant styles.
   * @default 'primary'
   */
  type?: 'primary' | 'link';
}

export type ButtomCommonProps = ButtonBaseProps & CommonProps & React.DOMAttributes<HTMLButtonElement>;

export type ButtonProps = ButtomCommonProps & ButtonTypeProps;

export default Button;
