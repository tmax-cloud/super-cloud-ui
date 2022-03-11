import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import BasicDialog, { DialogSize, ContentsType } from './BasicDialog';
import DeleteResourceDialog from './DeleteResourceDialog';
import { ServiceModel } from '../../models';

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

export const Basic: ComponentStory<typeof BasicDialog> = (props) => (
  <BasicDialog
    {...props}
    isOpen={true}
    title="Delete Resource Dialog"
    saveButtonText="Confirm"
    cancelButtonText="Cancel"
    size={DialogSize.medium}
    typeOfContentList={[ContentsType['string']]}
  />
);
export const DeleteResourceDialogComponent: ComponentStory<typeof DeleteResourceDialog> = (
  props,
) => (
  <DeleteResourceDialog
    {...props}
    isOpen={true}
    title="Delete Resource Dialog"
    saveButtonText="Confirm"
    cancelButtonText="Cancel"
    resourceName="podName_01"
    namespaceName="namespaceName_01"
    size={DialogSize.medium}
    kindObj={ServiceModel}
  />
);
