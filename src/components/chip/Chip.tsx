import * as React from 'react';
import { Chip as MuiChip, IconButton, styled, SxProps, Theme } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';

const DeleteButton = () => {
  return (
    <IconButton className="Chip-deleteIcon" aria-label="delete">
      <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" transform=""></path>
      </svg>
    </IconButton>
  );
};

const StyledChip = styled(MuiChip)(({ theme }) => ({
  '&.MuiChip-root': {
    borderColor: theme.palette.chip.border,
    borderRadius: 3,
    backgroundColor: theme.palette.chip.background,
    color: theme.palette.chip.text,
    fontSize: theme.typography.chip.fontSize,
  },
  '& .MuiChip-label': {
    padding: `${theme.spaces.chip.paddingY} ${theme.spaces.chip.paddingX}`,
    maxWidth: '7.5rem',
  },
  '.Chip-deleteIcon': {
    padding: `${theme.spaces.chip.paddingY} ${theme.spaces.chip.paddingX}`,
    paddingLeft: 0,
    fontSize: theme.typography.chip.fontSize,
  },
}));

const Chip = (props: ChipProps) => {
  return (
    <ThemeWrapper>
      <StyledChip deleteIcon={<DeleteButton />} variant="outlined" {...props} />
    </ThemeWrapper>
  );
};

export default Chip;

export interface ChipProps {
  /**
   * The content of the component.
   */
  label?: React.ReactNode;
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: React.EventHandler<any>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}
