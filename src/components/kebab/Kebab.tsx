import * as React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteResourceDialog from '../dialog/DeleteResourceDialog';
import { ServiceModel } from '../../models';
import Dialog, { DialogSize } from '../dialog';
import { K8sKind } from '../../types';

function Kebab(props: KebabProps) {
  const { kindObj } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => setDialogOpen(true)}>Delete Resource</MenuItem>
      </Menu>
      <Dialog {...props} SubComponent={DeleteResourceDialog} subProps={{ resourceName: 'podName_01', namespaceName: 'namespaceName_01', kindObj }} isOpen={isDialogOpen} setDialogOpen={setDialogOpen} size={DialogSize.medium} />
    </>
  );
}

export default React.memo(Kebab);

export interface KebabProps {
  kebabItems?: any[];
  kindObj: K8sKind;
}
