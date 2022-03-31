/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { DialogContentProps } from './index';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import handleRequest from '../../apis/handleRequest';
import { RequestType } from '../../types';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type DeleteResourceDialogProps = DialogContentProps;

const alert = {
  error: css`
    .MuiPaper-root {
      width: 100%;
      height: auto;
    }
  `,
};

export default function DeleteResourceDialog(props: DeleteResourceDialogProps) {
  const { kindObj, setDialogOpen, resourceName, namespaceName } = props;

  const [error, setError] = React.useState<string>('');

  const deleteResourceMsg = (resourceName: string, namespaceName?: string) => {
    if (!!namespaceName) {
      return `Are you sure you want to delete ${resourceName} in namespace ${namespaceName}?`;
    } else {
      return `Are you sure you want to delete ${resourceName}?`;
    }
  };

  const onDeleteClick = async () => {
    try {
      await handleRequest(kindObj, RequestType.DELETE);
      onClose();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const onClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <DialogTitle>
        <ReportProblemIcon color="warning" fontSize="large" />
        Delete Resource Dialog
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
          Cancel
        </Button>
        <Button onClick={onDeleteClick} variant="contained" color="error">
          Confirm
        </Button>
      </DialogActions>
    </>
  );
}
