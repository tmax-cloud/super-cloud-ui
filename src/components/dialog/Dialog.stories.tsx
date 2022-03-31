import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import { DialogSize, DialogOpenButton } from './index';
import DeleteResourceDialog from './DeleteResourceDialog';
import AnnotationDialog from './AnnotationDialog';
import { ServiceModel } from '../../models';

export default {
  title: 'Component/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Delete: ComponentStory<typeof DialogOpenButton> = (props) => {
  const { isOpen, resourceName, namespaceName, kindObj, SubComponent } = props;
  return (
    <DialogOpenButton
      {...props}
      isOpen={isOpen}
      resourceName={resourceName}
      namespaceName={namespaceName}
      size={DialogSize.medium}
      kindObj={kindObj}
      SubComponent={SubComponent}
    ></DialogOpenButton>
  );
};

export const Annotation: ComponentStory<typeof DialogOpenButton> = (props) => {
  const { isOpen, kindObj, SubComponent } = props;
  return (
    <DialogOpenButton
      {...props}
      isOpen={isOpen}
      size={DialogSize.medium}
      kindObj={kindObj}
      SubComponent={SubComponent}
    ></DialogOpenButton>
  );
};

Annotation.args = {
  kindObj: ServiceModel,
  SubComponent: AnnotationDialog,
};

Delete.args = {
  resourceName: 'podName_01',
  namespaceName: 'namespaceName_01',
  kindObj: ServiceModel,
  SubComponent: DeleteResourceDialog,
};
