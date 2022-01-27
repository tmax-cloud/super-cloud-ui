/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
interface DeleteResourceDialogProps {
  isOpen: boolean;
  title: string;
  saveButtonText: string;
  cancelButtonText: string;
  resourceName: string;
  namespaceName?: string;
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

export default function DeleteResourceDialog(props: DeleteResourceDialogProps) {
  const { isOpen, title, resourceName, namespaceName, saveButtonText, cancelButtonText, onClose, size } = props;

  const [open, setOpen] = React.useState(isOpen);

  const deleteResourceMsg = (resourceName: string, namespaceName?: string) => {
    if (!!namespaceName) {
      return `Are you sure you want to delete ${resourceName} in namespace ${namespaceName}?`;
    } else {
      return `Are you sure you want to delete ${resourceName}?`;
    }
  };

  React.useEffect(() => {
    isOpen ? setOpen(true) : setOpen(false);
  }, [isOpen]);

  return (
    <div>
      <Dialog css={dialogSize[size as DialogSize]} open={open} onClose={onClose}>
        <DialogTitle>
          <ReportProblemIcon color="warning" fontSize="large" />
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{deleteResourceMsg(resourceName, namespaceName)}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            {cancelButtonText}
          </Button>
          <Button onClick={onClose} variant="contained" color="error">
            {saveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
