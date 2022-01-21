import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import BasicDialog, { DialogSize } from './BasicDialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof BasicDialog> = (args) => <BasicDialog {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  isOpen: true,
  title: 'Basic Dialog',
  subTitle: 'SubTitle',
  saveButtonText: 'Save',
  cancelButtonText: 'Cancel',
  size: DialogSize.medium,
};
