import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleSelect from './Select';

export default {
  title: 'Component/Select/SimpleSelect',
  component: SimpleSelect,
  argTypes: {
    helperText: {
      control: 'text',
    },
    noneOption: {
      control: 'boolean',
    },
    noneText: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    fullWidth: {
      control: 'boolean',
    },
    autoWidth: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SimpleSelect>;

const Template: ComponentStory<typeof SimpleSelect> = (args) => <SimpleSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Age',
  items: [
    { key: 'Ten', value: 10 },
    { key: 'Twenty', value: 20 },
    { key: 'Thirty', value: 30 },
    { key: 'Long Text Long Text Long Text Long Text', value: 'Long Text' },
  ],
  helperText: 'Select age',
};

export const BasicWithDefaultValue = Template.bind({});
BasicWithDefaultValue.args = {
  label: 'Age',
  items: [
    { key: 'Ten', value: 10 },
    { key: 'Twenty', value: 20 },
    { key: 'Thirty', value: 30 },
  ],
  defaultValue: 10,
};