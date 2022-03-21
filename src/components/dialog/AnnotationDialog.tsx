/* eslint-disable no-useless-concat */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { CommonDialogProps } from './index';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ListView from '../listview/Listview';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import handleRequest from '../../apis/handleRequest';
import { K8sKind, RequestType } from '../../types';

export enum DialogSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type AnnotationDialogProps = CommonDialogProps & { kindObj: K8sKind };

const alert = {
  error: css`
    .MuiPaper-root {
      width: 100%;
      height: auto;
    }
  `,
};

export default function AnnotationDialog(props: AnnotationDialogProps) {
  const { kindObj, setDialogOpen } = props;

  const [error, setError] = React.useState<string>('');

  const onDeleteClick = async () => {
    try {
      await handleRequest(kindObj, RequestType.DELETE);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const onClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <DialogTitle>Edit Annotation</DialogTitle>
      <DialogContent>
        <ListView headerList={['Key', 'Value']} />
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
        <Button onClick={onDeleteClick} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </>
  );
}
