import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Tooltip } from '@mui/material';

const ColorButton = styled(Button)(() => ({
  backgroundColor: '#06c',
  '&:hover': {
    backgroundColor: '#004080',
  },
  '&.Mui-disabled': {
    color: '#737679',
    backgroundColor: '#d2d2d2',
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
  return tooltipText ? (
    <Tooltip title={tooltipText} placement="top" arrow>
      <span>{button}</span>
    </Tooltip>
  ) : (
    button
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

type TooltipLinkButtonProps = LinkButtonProps & {
  /**
   * 	Tooltip title. Zero-length titles string are never displayed
   */
  tooltipText?: string;
};

TooltipLinkButton.defaultProps = {
  disabled: false,
};

export default TooltipLinkButton;
