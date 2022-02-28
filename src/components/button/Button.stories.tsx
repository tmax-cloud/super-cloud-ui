import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
};

Basic.parameters = {
  jest: 'Button.test.tsx',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button',
};
