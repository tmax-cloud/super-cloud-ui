/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
interface BasicDialogProps {
  isOpen: boolean;
  title: string;
  subTitle: string;
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

export default function BasicDialog(props: BasicDialogProps) {
  const { isOpen, title, subTitle, saveButtonText, cancelButtonText, onClose, size } = props;

  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    isOpen ? setOpen(true) : setOpen(false);
  }, [isOpen]);

  return (
    <div>
      <Dialog css={dialogSize[size as DialogSize]} open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subTitle}</DialogContentText>
          {/** you can customize this area*/}
          <TextField autoFocus margin="dense" label="Contents" type="contents" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{cancelButtonText}</Button>
          <Button onClick={onClose}>{saveButtonText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
