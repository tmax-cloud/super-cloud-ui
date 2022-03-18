import * as React from 'react';
import { Box, IconButton, ListItem, styled, SvgIcon, Typography } from '@mui/material';
import ThemeWrapper from '../../themes/ThemeWrapper';
import Tooltip from '../tooltip/Tooltip';

const StyledChipGroup = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flaxWrap: 'wrap',
  alignItems: 'center',
  padding: `${theme.spaces.chipGroup.paddingTop} ${theme.spaces.chipGroup.paddingRight} ${theme.spaces.chipGroup.paddingLeft} ${theme.spaces.chipGroup.paddingBottom}`,
  backgroundColor: theme.palette.chipGroup.background,
  borderRadius: 3,
}));

const StyledChipGroupMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
  alignItems: 'baseline',
}));

const StyledChipGroupLabel = styled(Typography)(({ theme }) => ({
  maxWidth: '18ch',
  marginRight: theme.spaces.chipGroup.labelMarginRight,
  fontSize: theme.typography.chipGroup.fontSize,
}));

const StyledChipGroupList = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  marginRight: theme.spaces.chipGroup.listMarginRight,
  marginBottom: theme.spaces.chipGroup.listMarginBottom,
}));

const StyledChipGroupListItem = styled(ListItem)(({ theme }) => ({
  display: 'inline-flex',
  width: 'auto',
  marginRight: theme.spaces.chipGroup.listItemMarginRight,
  marginBottom: theme.spaces.chipGroup.listItemMarginBottom,
}));

const StyledChipGroupClose = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: theme.spaces.chipGroup.closeMarginTop,
  marginBottom: theme.spaces.chipGroup.closeMarginBottom,
}));

const StyledChipGroupCloseButton = styled(IconButton)(({ theme }) => ({
  padding: `${theme.spaces.global.spacerXs} ${theme.spaces.global.spacerMd}`,
}));

const StyledChipGroupCloseIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.chipGroup.icon,
  fontSize: theme.typography.chipGroup.fontSize,
  '&:hover': {
    color: theme.palette.chip.border,
  },
}));

const ChipGroupCloseButton = (props: ChipGroupCloseButtonProps) => {
  const { onDeleteAll } = props;
  return (
    <StyledChipGroupCloseButton disableRipple onClick={onDeleteAll}>
      <StyledChipGroupCloseIcon viewBox="0 0 352 512">
        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" transform=""></path>
      </StyledChipGroupCloseIcon>
    </StyledChipGroupCloseButton>
  );
};

const ChipGroup = (props: ChipGroupProps) => {
  const { categoryName, children, onDeleteAll } = props;
  const items = React.Children.toArray(children);
  const ref = React.useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) {
      const p = ref.current as HTMLParagraphElement;
      setShowTooltip(p.offsetWidth < p.scrollWidth);
    }
  }, [ref]);

  return (
    <>
      {items.length === 0 ? null : (
        <ThemeWrapper>
          <StyledChipGroup>
            <StyledChipGroupMain>
              {categoryName && (
                <Tooltip content={showTooltip && categoryName}>
                  <StyledChipGroupLabel ref={ref} noWrap>
                    {categoryName}
                  </StyledChipGroupLabel>
                </Tooltip>
              )}
              <StyledChipGroupList component="ul">
                {items?.map((item, index) => {
                  return (
                    <StyledChipGroupListItem key={`item-${index}`} disableGutters disablePadding>
                      {item}
                    </StyledChipGroupListItem>
                  );
                })}
              </StyledChipGroupList>
            </StyledChipGroupMain>
            {onDeleteAll && (
              <StyledChipGroupClose>
                <ChipGroupCloseButton onDeleteAll={onDeleteAll} />
              </StyledChipGroupClose>
            )}
          </StyledChipGroup>
        </ThemeWrapper>
      )}
    </>
  );
};

export interface ChipGroupCloseButtonProps {
  /**
   * Function that is called when clicking on the chip group close button.
   * If set, the delete icon will be shown.
   */
  onDeleteAll?: React.MouseEventHandler;
}
export interface ChipGroupBaseProps {
  /**
   * Category name text for the chip group category.
   */
  categoryName?: string;
  /**
   * Content rendered inside the chip group. Should be <Chip> elements.
   */
  children?: React.ReactNode;
}

export type ChipGroupProps = ChipGroupBaseProps & ChipGroupCloseButtonProps;

export default ChipGroup;
