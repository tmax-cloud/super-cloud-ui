import * as React from 'react';
import { Autocomplete as MuiAutocomplete, Theme, AutocompleteRenderInputParams, SxProps, AutocompleteInputChangeReason, AutocompleteCloseReason, AutocompleteChangeReason, AutocompleteChangeDetails } from '@mui/material';
import { ListContainer } from './ListContainer';
import { RoundButtonItem } from './RoundButtonItem';

const renderOptionByType = (enableLabelOption?: boolean) => {
  const renderLabelOption = (props: React.HTMLAttributes<HTMLLIElement>, option: string) => <RoundButtonItem key={props.id} props={props} item={option} />;
  return enableLabelOption ? renderLabelOption : undefined;
};

const Autocomplete = (props: AutocompleteProps) => {
  const { renderLabelOption, ...rest } = props;
  return <MuiAutocomplete disableClearable freeSolo PaperComponent={ListContainer} renderOption={renderOptionByType(renderLabelOption)} {...rest} />;
};

export default Autocomplete;

export interface AutocompleteProps {
  /**
   * Override the default text for the *clear* icon button.
   * @default 'Clear'
   */
  clearText?: string;
  /**
   * Override the default text for the *close popup* icon button.
   * @default 'Close'
   */
  closeText?: string;
  /**
   * The default value.
   * @default 'null'
   */
  defaultValue?: any;
  /**
   * 	This prop is used to help implement the accessibility logic. If you don't provide an id it will fall back to a randomly generated one.
   */
  id?: string;
  /**
   * The input value.
   */
  inputValue?: string;
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string|string[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange?: (event: React.SyntheticEvent, value: any, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<string>) => void;
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose?: (event: React.SyntheticEvent, reason: AutocompleteCloseReason) => void;
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange?: (event: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => void;
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * Array of options.
   */
  options: ReadonlyArray<string>;
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
  /**
   * If true, Options are displayed in label style.
   */
  renderLabelOption?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The value of the autocomplete.
   */
  value?: any;
}
