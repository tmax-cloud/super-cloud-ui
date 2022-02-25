import * as React from 'react';
import { styled, TextField as MuiTextField, Theme } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';
import Error from '../../assets/images/error.svg';

const getHoverBorderBottomColor = (theme: Theme, ownerState: TextFieldProps) => {
  if (ownerState.readOnly || ownerState.disabled) {
    return theme.palette.textfield.borderBottom;
  }
  if (ownerState.error) {
    return theme.palette.textfield.errorBorderBottom;
  }
  return theme.palette.textfield.hoverBorderBottom;
};

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<{ ownerState: TextFieldProps }>(({ theme, ownerState }) => ({
  '&.MuiTextField-root': {
    width: '100%',
    height: 'calc(1rem * 1.5 + 1px * 2 + calc(0.375rem - 1px) + calc(0.375rem - 1px))',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: ownerState.readOnly ? theme.palette.textfield.readonlyBackground : theme.palette.textfield.background,
    border: `1px solid ${theme.palette.textfield.border}`,
    borderBottomColor: ownerState.error ? theme.palette.textfield.errorBorderBottom : theme.palette.textfield.borderBottom,
    borderBottomWidth: ownerState.error ? '2px' : '1px',
    borderRadius: 0,
    backgroundImage: ownerState.error && `url(${Error})`,
    backgroundPosition: ownerState.error && 'calc(100% - 0.5rem) center',
    backgroundSize: ownerState.error && '1rem 1rem',
    backgroundRepeat: ownerState.error && 'no-repeat',
    '& fieldset': {
      border: 'none',
      padding: 0,
    },
    '&:hover': {
      borderBottomColor: getHoverBorderBottomColor(theme, ownerState),
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '& .Mui-disabled': {
      color: theme.palette.textfield.disabled,
      backgroundColor: theme.palette.textfield.disabledBackground,
      cursor: 'not-allowed',
      WebkitTextFillColor: 'initial',
    },
  },
  '& .MuiInputBase-input': {
    padding: `${theme.spaces.textfield.paddingY} ${theme.spaces.textfield.paddingX}`,
    paddingBottom: ownerState.error ? theme.spaces.textfield.errorPaddingBottom : theme.spaces.textfield.paddingY,
    paddingRight: ownerState.error ? theme.spaces.textfield.errorPaddingRight : theme.spaces.textfield.paddingX,
    color: theme.palette.global.color100,
    fontSize: theme.typography.textfield.fontSize,
    lineHeight: 1.5,
    textOverflow: 'ellipsis',
    '&:focus': {
      outline: 'auto',
    },
    '&::placeholder': {
      color: theme.palette.textfield.placeholder,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    fontSize: theme.typography.textfield.fontSize,
  },
}));

const TextField = (props: TextFieldProps) => {
  const { readOnly, ...rest } = props;
  return (
    <ThemeWrapper>
      <StyledTextField variant="outlined" ownerState={props} InputProps={{ readOnly }} {...rest} />
    </ThemeWrapper>
  );
};

export default TextField;

export interface TextFieldProps {
  /**
   * Class name applied to the root element.
   */
  className?: string;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: unknown;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  onBlur?: React.FocusEventHandler;
  onClick?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * It prevents the user from changing the value of the field
   */
  readOnly?: boolean;
  /**
   * If `true`, the `input` element is required.
   */
  required?: boolean;
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: string;
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
}

TextField.defaultProps = {
  disabled: false,
  error: false,
  readOnly: false,
  required: false,
  type: 'text',
};
