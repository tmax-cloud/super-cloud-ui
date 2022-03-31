/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { Button } from '@mui/material';
import { default as MuiDialog } from '@mui/material/Dialog';
import { K8sKind } from '../../types';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface DialogProps {
  isOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  saveButtonText?: string;
  cancelButtonText?: string;
  SubComponent: any;
  subProps: any;
  size?: DialogSize;
  kindObj: K8sKind;
}

export interface CommonDialogContentProps {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  kindObj: K8sKind;
}

export interface DialogContentProps extends CommonDialogContentProps {
  [key: string]: any;
}

const dialogSize = {
  small: css`
    .MuiPaper-root {
      width: 350px;
      height: 350px;
    }
  `,
  medium: css`
    .MuiPaper-root {
      width: 500px;
      height: 350px;
    }
  `,
  large: css`
    .MuiPaper-root {
      width: 1000px;
      height: 720px;
    }
  `,
};

export default function Dialog(props: DialogProps) {
  const { isOpen, SubComponent, setDialogOpen, size } = props;

  const onClose = () => {
    setDialogOpen(false);
  };
  if (!SubComponent) {
    return null;
  }

  return (
    <div>
      <MuiDialog css={dialogSize[size as DialogSize]} open={isOpen} onClose={onClose}>
        {<SubComponent {...props} />}
      </MuiDialog>
    </div>
  );
}

// storybook이랑 tdd용
export function DialogOpenButton(props: DialogOpenButtonProps) {
  const { subProps, SubComponent, kindObj } = props;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog {...props} kindObj={kindObj} SubComponent={SubComponent} subProps={subProps} isOpen={isOpen} setDialogOpen={setOpen} size={DialogSize.medium} />
    </>
  );
}

export interface DialogOpenButtonProps {
  [key: string]: any;
  isOpen: boolean;
  title?: string;
  saveButtonText?: string;
  cancelButtonText?: string;
  SubComponent: any;
  subProps: any;
  size?: DialogSize;
  kindObj: K8sKind;
}
