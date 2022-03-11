import * as React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteResourceDialog from '../dialog/DeleteResourceDialog';
import { ServiceModel } from '../../models';
import { DialogSize } from '../dialog/BasicDialog';

function Kebab(props: KebabProps) {
  const { kebabItems } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dialogAction, selectDialogAction] = React.useState<React.ReactElement>(<></>);
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
        <MenuItem onClick={() => selectDialogAction(<DeleteResourceDialog {...props} isOpen={true} title="Delete Resource Dialog" saveButtonText="Confirm" cancelButtonText="Cancel" resourceName="podName_01" namespaceName="namespaceName_01" size={DialogSize.medium} kindObj={ServiceModel} />)}>Delete Resource</MenuItem>
      </Menu>
      {dialogAction}
    </>
  );
}

export default React.memo(Kebab);

export interface KebabProps {
  kebabItems?: any[];
}
