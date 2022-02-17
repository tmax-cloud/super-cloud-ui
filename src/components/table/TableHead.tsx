import * as React from 'react';
import { TableHead as MuiTableHead, TableCell, TableRow } from '@mui/material';
import { TableItemProps } from './Table';

function TableHead(props: TableHeadProps) {
  const { tableItems } = props;
  return (
    <MuiTableHead>
      <TableRow>
        {tableItems.map((item: TableItemProps) => (
          <TableCell key={item.name} className={item.className}>
            {item.displayTitle}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}

interface TableHeadProps {
  tableItems: TableItemProps[];
}

export default TableHead;
