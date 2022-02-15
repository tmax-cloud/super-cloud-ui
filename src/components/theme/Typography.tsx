import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography as MuiTypography } from '@mui/material';
import { typography } from '../../themes/variables';

const TypographyHeader = (props: TypographyHeaderProps) => {
  const { title } = props;
  return (
    <MuiTypography variant="h4" component="div" gutterBottom>
      {title}
    </MuiTypography>
  );
};

const TypographyTable = (props: TypographyTableProps) => {
  const { label } = props;
  return (
    <Paper sx={{ width: '100%', mb: 5 }}>
      {Object.entries(typography).map(([typoName, typoValues]) => {
        return (
          <Box key={typoName}>
            <MuiTypography sx={{ p: 2, pb: 0 }} variant="h5" component="div">
              {typoName.charAt(0).toUpperCase() + typoName.slice(1)}
            </MuiTypography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Variable</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Example</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(typoValues)
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
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      })}
    </Paper>
  );
};

const TypographyItem = (props: TypographyItemProps) => {
  const { title, label } = props;
  return (
    <Box>
      <TypographyHeader title={title} />
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

interface TypographyHeaderProps {
  title: string;
}

interface TypographyTableProps {
  label: string;
}

type TypographyItemProps = TypographyHeaderProps & TypographyTableProps;
