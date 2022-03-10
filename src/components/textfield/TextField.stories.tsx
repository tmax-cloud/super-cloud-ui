import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Component/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (props) => {
  const { placeholder, ...rest } = props;
  return <TextField placeholder={placeholder} {...rest} />;
};

Basic.args = {
  placeholder: 'Type something...',
};

export const Disabled: ComponentStory<typeof TextField> = (props) => {
  const { disabled, value, ...rest } = props;
  return <TextField disabled={disabled} value={value} {...rest} />;
};

Disabled.args = {
  disabled: true,
  value: 'disabled text input example',
};

export const Readonly: ComponentStory<typeof TextField> = (props) => {
  const { readOnly, value, ...rest } = props;
  return <TextField readOnly={readOnly} value={value} {...rest} />;
};

Readonly.args = {
  readOnly: true,
  value: 'read only text input example',
};

export const Error: ComponentStory<typeof TextField> = (props) => {
  const { error, helperText, ...rest } = props;
  return <TextField error={error} helperText={helperText} {...rest} />;
};

Error.args = {
  error: true,
  helperText: 'Enter a value.',
};
