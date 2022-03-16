/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { Button } from '@mui/material';
import { default as MuiDialog } from '@mui/material/Dialog';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ContentsType {
  string = 'string',
  textInput = 'textInput',
  toggleButton = 'toggleButton',
  numberSpinner = 'numberSpinner',
  listView = 'listView',
}
export interface CommonDialogProps {
  isOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  saveButtonText?: string;
  cancelButtonText?: string;
  SubComponent: any;
  subProps: any;
  size?: DialogSize;
}

export interface DialogProps extends CommonDialogProps {
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

  return (
    <div>
      <MuiDialog css={dialogSize[size as DialogSize]} open={isOpen} onClose={onClose}>
        <SubComponent {...props} />
      </MuiDialog>
    </div>
  );
}

// storybook이랑 tdd용
export function DialogOpenButton(props: DialogOpenButtonProps) {
  const { subProps, SubComponent } = props;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}> Open Dialog</Button>
      <Dialog {...props} SubComponent={SubComponent} subProps={subProps} isOpen={isOpen} setDialogOpen={setOpen} size={DialogSize.medium} />
    </>
  );
}

export type DialogOpenButtonProps = Omit<DialogProps, 'isOpen' | 'setOpen'>;
