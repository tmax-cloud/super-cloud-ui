import * as React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnnotationDialog from '../dialog/AnnotationDialog';
import Dialog, { DialogSize } from '../dialog';
import { K8sKind } from '../../types';
import DeleteResourceDialog from '../dialog/DeleteResourceDialog';

interface KebabItemProps {
  label: string;
  children: any;
}

type KebabFactoryProps = () => KebabItemProps;

const kebabFactory: KebabFactoryProps[] = [
  () => ({
    label: 'Delete Resource',
    children: DeleteResourceDialog,
  }),
];

function Kebab(props: KebabProps) {
  const { kindObj, kebabItems } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [kebabList, setKebabList] = React.useState(kebabFactory);
  const [kebabItem, selectKebabItem] = React.useState<any>(null);

  React.useEffect(() => {
    // custom한 kebab 추가하고 싶을 경우 setKebabList로 추가
    if (kebabItems) {
      setKebabList((defaultItems) => [...defaultItems, ...(kebabItems as KebabFactoryProps[])]);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuClick = (factoryItem: KebabFactoryProps) => () => {
    selectKebabItem(() => factoryItem().children);
    setDialogOpen(() => true);
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
        {kebabList.map((item: any) => (
          <MenuItem key={item().label} onClick={onMenuClick(item)}>
            {item().label}
          </MenuItem>
        ))}
      </Menu>
      <Dialog kindObj={kindObj} SubComponent={kebabItem} subProps={{ resourceName: 'podName_01', namespaceName: 'namespaceName_01', kindObj }} isOpen={isDialogOpen} setDialogOpen={setDialogOpen} size={DialogSize.medium} />
    </>
  );
}

export default React.memo(Kebab);

export interface KebabProps {
  kebabItems?: KebabFactoryProps[];
  kindObj: K8sKind;
}
