import * as React from 'react';
import { styled, Select as MuiSelect, SxProps, Theme, InputLabel, FormControl } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import ThemeWrapper from '../../themes/ThemeWrapper';
import { SelectItem } from './SelectItem';

const DEFAULT_PADDING_RIGHT = '2.5rem';

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  '&.MuiInput-root': {
    margin: 0,
    '&:before': {
      borderBottom: 0,
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
    '&:focus': {
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.select.focusBorderBottom,
    },
    '&:active': {
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.select.activeBorderBottom,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.select.disabledBg,
    },
  },
  '& .MuiSelect-select': {
    border: `1px solid ${theme.palette.select.border}`,
    borderBottomColor: theme.palette.select.borderBottom,
    padding: `${theme.spaces.select.paddingY} ${theme.spaces.select.paddingX}`,
    minWidth: 0,
    fontSize: theme.typography.select.fontSize,
    color: theme.palette.select.color,
    lineHeight: 1.5,
    '&.MuiInput-input': {
      paddingRight: `${DEFAULT_PADDING_RIGHT} !important`,
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      borderBottomColor: theme.palette.select.hoverBorderBottom,
    },
  },
  '& .MuiSelect-icon': {
    marginRight: '0.5rem',
    color: theme.palette.select.color,
  },
}));

const StyledSelectLabel = styled(InputLabel)(({ theme }) => ({
  '&.MuiInputLabel-root': {
    color: theme.palette.select.color,
    maxWidth: `calc(100% - ${DEFAULT_PADDING_RIGHT})`,
    transform: 'translate(14px,8px) scale(1)',
  },
}));

const menuProps = {
  sx: {
    top: '0.25rem',
  },
  PaperProps: {
    sx: {
      boxShadow: '0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)',
    },
  },
};

const Select = (props: SelectProps) => {
  const { renderLabel, items, value, ...rest } = props;
  const visibleLabel = !value || value === '';
  return (
    <ThemeWrapper>
      <FormControl>
        {renderLabel && visibleLabel && <StyledSelectLabel>{renderLabel}</StyledSelectLabel>}
        <StyledSelect variant="standard" MenuProps={menuProps} value={value} {...rest}>
          {items?.map((item, index) => {
            return (
              <SelectItem key={`select-item-${index}`} value={item.value}>
                {item.content}
              </SelectItem>
            );
          })}
        </StyledSelect>
      </FormControl>
    </ThemeWrapper>
  );
};

export default Select;

export type Item = {
  value: any;
  content: any;
};

export interface SelectProps<T = unknown> {
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: T;
  /**
   * The `id` of the wrapper element
   */
  id?: string;
  /**
   * Select Items. It is an array of object including `value` and `content`.
   */
  items?: Item[];
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<T>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected.
   */
  onChange?: SelectInputProps<T>['onChange'];
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * The label of the input. It is only used for layout.
   * Label is displayed when there is no value or an empty string.
   */
  renderLabel?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   */
  value?: T;
}

Select.defaultProps = {
  defaultValue: '',
};
