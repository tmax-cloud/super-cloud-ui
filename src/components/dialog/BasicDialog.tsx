/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
  title: string;
  saveButtonText: string;
  cancelButtonText: string;
  onClose?: () => void;
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

export default function BasicDialog(props: DialogProps) {
  const { isOpen, title, saveButtonText, cancelButtonText, onClose, size } = props;

  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    isOpen ? setOpen(true) : setOpen(false);
  }, [isOpen]);

  return (
    <div>
      <Dialog css={dialogSize[size as DialogSize]} open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <span>Basic Dialog contents.... blah blah</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            {cancelButtonText}
          </Button>
          <Button onClick={onClose} variant="contained">
            {saveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
