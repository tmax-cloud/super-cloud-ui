import * as React from 'react';
import { Button, styled, Tooltip } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.button.primaryBg,
  '&:hover': {
    backgroundColor: theme.palette.button.primaryHoverBg,
  },
  '&.Mui-disabled': {
    color: theme.palette.button.disabled,
    backgroundColor: theme.palette.button.disabledBg,
    cursor: 'no-drop',
  },
}));

const LinkButton = (props: LinkButtonProps) => {
  const { buttonText, disabled, href } = props;
  return (
    <ColorButton variant="contained" disabled={disabled} href={href}>
      {buttonText}
    </ColorButton>
  );
};

export const TooltipLinkButton = (props: TooltipLinkButtonProps) => {
  const { tooltipText, ...rest } = props;
  const button = <LinkButton {...rest} />;
  return (
    <ThemeWrapper>
      {tooltipText ? (
        <Tooltip title={tooltipText} placement="top" arrow>
          <span>{button}</span>
        </Tooltip>
      ) : (
        button
      )}
    </ThemeWrapper>
  );
};

interface LinkButtonProps {
  /**
   * Button text
   */
  buttonText?: string;
  /**
   * If true, the component is disabled
   */
  disabled?: boolean;
  /**
   * The URL to link to when the button is clicked
   */
  href?: string;
}

export type TooltipLinkButtonProps = LinkButtonProps & {
  /**
   * 	Tooltip title. Zero-length titles string are never displayed
   */
  tooltipText?: string;
};

TooltipLinkButton.defaultProps = {
  disabled: false,
};
