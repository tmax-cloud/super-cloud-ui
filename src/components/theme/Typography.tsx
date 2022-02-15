import * as React from 'react';
import { Box, TableCell, TableRow, Typography as MuiTypography } from '@mui/material';
import { typography } from '../../themes/variables';
import { ThemeTable, ThemeTitle, ThemeTitleProps } from './Theme';

const createTableBody = (label: string) => {
  const Component = (data: { [name: string]: any }) => {
    return (
      <>
        {Object.entries(data)
          .filter(([name]) => name.startsWith(label))
          .map(([name, value]) => {
            return (
              <TableRow key={name}>
                <TableCell sx={{ width: 300 }}>{name}</TableCell>
                <TableCell sx={{ width: 300 }}>{value}</TableCell>
                <TableCell>
                  <MuiTypography component="div" sx={{ [label]: value }}>
                    Example Text
                  </MuiTypography>
                </TableCell>
              </TableRow>
            );
          })}
      </>
    );
  };
  return Component;
};

const TypographyTable = (props: TypographyTableProps) => {
  const { label } = props;
  return <ThemeTable data={typography} tableBody={createTableBody(label)} />;
};

const TypographyItem = (props: TypographyItemProps) => {
  const { title, label } = props;
  return (
    <Box>
      <ThemeTitle title={title} />
      <TypographyTable label={label} />
    </Box>
  );
};

export const Typography = () => {
  return (
    <Box sx={{ width: '100%', px: '6rem', py: '3rem' }}>
      <TypographyItem title="Font Size" label="fontSize" />
    </Box>
  );
};

interface TypographyTableProps {
  label: string;
}

type TypographyItemProps = ThemeTitleProps & TypographyTableProps;
