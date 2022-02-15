import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography as MuiTypography } from '@mui/material';

export const ThemeTitle = (props: ThemeTitleProps) => {
  const { title } = props;
  return (
    <MuiTypography variant="h4" component="div" gutterBottom>
      {title}
    </MuiTypography>
  );
};

export const ThemeTable = (props: ThemeTableProps) => {
  const { data, tableBody, exampleCell } = props;
  return (
    <Paper sx={{ width: '100%', mb: 5 }}>
      {Object.entries(data).map(([objName, objValues]) => {
        return (
          <Box key={objName}>
            <MuiTypography sx={{ p: 2 }} variant="h5" component="div">
              {objName.charAt(0).toUpperCase() + objName.slice(1)}
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
                  {tableBody
                    ? tableBody(objValues)
                    : Object.entries(objValues).map(([name, value]) => {
                        return (
                          <TableRow key={name}>
                            <TableCell sx={{ width: 300 }}>{name}</TableCell>
                            <TableCell sx={{ width: 300 }}>{value}</TableCell>
                            <TableCell>{exampleCell && exampleCell(value)}</TableCell>
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

export interface ThemeTitleProps {
  title: string;
}

export interface ThemeTableProps {
  data: { [name: string]: { [name: string]: any } };
  tableBody?: (arg: any) => React.ReactNode;
  exampleCell?: (arg: any) => React.ReactNode;
}
