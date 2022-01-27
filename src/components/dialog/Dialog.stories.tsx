import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import BasicDialog, { DialogSize, ContentsType } from './BasicDialog';
import DeleteResourceDialog from './DeleteResourceDialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    typeOfContentList: {
      description: '{ string | textInput }[]',
      table: {
        defaultValue: { summary: 'string[]' },
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof BasicDialog> = (args) => <BasicDialog {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  isOpen: true,
  title: 'Basic Dialog',
  saveButtonText: 'Save',
  cancelButtonText: 'Cancel',
  size: DialogSize.medium,
  typeOfContentList: [ContentsType['string']],
};

export const DeleteResource: ComponentStory<typeof DeleteResourceDialog> = (args) => <DeleteResourceDialog {...args} />;

DeleteResource.args = {
  isOpen: true,
  title: 'Delete Resource Dialog',
  saveButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
  resourceName: 'podName_01',
  namespaceName: 'namespaceName_01',
  size: DialogSize.medium,
};
