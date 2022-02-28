import * as React from 'react';
import { TableHead as MuiTableHead, TableCell, TableRow, TableSortLabel } from '@mui/material';
import { TableItemProps, Order } from './Table';

function TableHead(props: TableHeadProps) {
  const { columnDataList, onRequestSort, order, orderBy } = props;

  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <MuiTableHead>
      <TableRow>
        {columnDataList.map((item: TableItemProps) => (
          <TableCell key={item.name} className={item.className} sortDirection={orderBy === item.name ? order : false}>
            <TableSortLabel active={orderBy === item.name} direction={orderBy === item.name ? order : 'asc'} onClick={createSortHandler(item.name)}>
              {item.displayTitle}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}

interface TableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  order: Order;
  orderBy: string;
  columnDataList: TableItemProps[];
}

export default TableHead;
