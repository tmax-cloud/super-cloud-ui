import * as React from 'react';
import * as _ from 'lodash-es';
import { TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import { TableItemProps } from './Table';
import { fixedTableItem } from './fixedTableItem';
import StatusBox from './StatusBox';

function TableBody(props: TableBodyProps) {
  const { items, tableItems, errorMsg } = props;
  if (errorMsg || !items.length) {
    return (
      <MuiTableBody>
        <TableRow key="error-row">
          <TableCell align="center" colSpan={2}>
            <StatusBox message={errorMsg} />
          </TableCell>
        </TableRow>
      </MuiTableBody>
    );
  }
  return (
    <>
      {items.map((item: any) => (
        <TableRow key={item.metadata.uid}>
          {tableItems.map((currentColumnItem: TableItemProps, idx: number) => (
            <TableCell key={currentColumnItem.name}>{_.get(item, (fixedTableItem as any)[currentColumnItem.name] || currentColumnItem.ref)}</TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

interface TableBodyProps {
  tableItems: TableItemProps[];
  items: any;
  errorMsg: string;
}

export default TableBody;
