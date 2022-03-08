import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Component/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const BasicTemplate: ComponentStory<typeof TextField> = () => (
  <TextField placeholder="Type something..." />
);
export const Basic = BasicTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof TextField> = () => (
  <TextField disabled value="disabled text input example" />
);
export const Disabled = DisabledTemplate.bind({});

const ReadonlyTemplate: ComponentStory<typeof TextField> = () => (
  <TextField readOnly value="read only text input example" />
);
export const Readonly = ReadonlyTemplate.bind({});

const ErrorTemplate: ComponentStory<typeof TextField> = () => (
  <TextField error helperText="Enter a value." />
);
export const Error = ErrorTemplate.bind({});

export const Shortcut: ComponentStory<typeof TextField> = (props) => {
  const { enableShortcut, placeholder, ...rest } = props;
  return <TextField enableShortcut={enableShortcut} placeholder={placeholder} {...rest} />;
};

Shortcut.parameters = {
  options: {
    enableShortcuts: false,
  },
};

Shortcut.args = {
  enableShortcut: true,
  placeholder: 'Press "/" to focus, and press "esc" to blur',
};

Shortcut.storyName = 'Focus & Blur with shortcuts';
