import * as React from 'react';
import { styled, Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps, tooltipClasses, SxProps, Theme } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';

const StyledTooltip = styled(({ className, ...props }: MuiTooltipProps) => <MuiTooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.tooltip.contentBg,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tooltip.contentBg,
    padding: `${theme.spaces.tooltip.contentPaddingTop} ${theme.spaces.tooltip.contentPaddingRight} ${theme.spaces.tooltip.contentPaddingBottom} ${theme.spaces.tooltip.contentPaddingLeft}`,
    fontSize: theme.typography.tooltip.fontSize,
    borderRadius: 0,
    top: -15,
    maxWidth: '18.75rem',
  },
}));

export const Tooltip = (props: TooltipProps) => {
  const { children, open, title, ...rest } = props;
  return (
    <ThemeWrapper>
      <StyledTooltip open={open} title={title} placement="top" arrow {...rest}>
        <span>{children}</span>
      </StyledTooltip>
    </ThemeWrapper>
  );
};

export interface BaseProps {
  /**
   * Tooltip reference element.
   */
  children: React.ReactElement<any, any>;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose?: (event: React.SyntheticEvent | Event) => void;
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: NonNullable<React.ReactNode>;
}

export type TooltipProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;
