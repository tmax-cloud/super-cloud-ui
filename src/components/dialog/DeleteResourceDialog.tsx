/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { DialogProps } from './BasicDialog';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import handleRequest from '../../apis/handleRequest';
import { K8sKind, RequestType } from '../../types';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type DeleteResourceDialogProps = DialogProps & { kindObj: K8sKind; resourceName: string; namespaceName: string };

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
const alert = {
  error: css`
    .MuiPaper-root {
      width: 100%;
      height: auto;
    }
  `,
};

export default function DeleteResourceDialog(props: DeleteResourceDialogProps) {
  const { kindObj, isOpen, title, resourceName, namespaceName, saveButtonText, cancelButtonText, size } = props;

  const [open, setOpen] = React.useState<boolean>(isOpen);
  const [error, setError] = React.useState<string>('');

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

  const onDeleteClick = async () => {
    try {
      await handleRequest(kindObj, RequestType.DELETE);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

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
        {error && (
          <div css={alert.error}>
            <Alert severity="error">{error}</Alert>
          </div>
        )}
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            {cancelButtonText}
          </Button>
          <Button onClick={onDeleteClick} variant="contained" color="error">
            {saveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
