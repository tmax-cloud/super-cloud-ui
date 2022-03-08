import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Component/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Type something...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'disabled text input example',
};

export const Readonly = Template.bind({});
Readonly.args = {
  readOnly: true,
  value: 'read only text input example',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: 'Enter a value.',
};

export const KeyboardFocusBlur = Template.bind({});
KeyboardFocusBlur.parameters = {
  options: {
    enableShortcuts: false,
  },
};
KeyboardFocusBlur.args = {
  placeholder: 'Press "/" to focus, and press "esc" to blur',
  keyboardShortcut: true,
};
KeyboardFocusBlur.storyName = 'Keyboard focus and blur';
