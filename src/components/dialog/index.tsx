/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

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
export interface DialogProps {
  isOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  saveButtonText: string;
  cancelButtonText: string;
  SubComponent: any;
  size?: DialogSize;
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
