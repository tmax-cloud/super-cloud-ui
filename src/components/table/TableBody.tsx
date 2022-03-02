import * as React from 'react';
import { TableBody as MuiTableBody } from '@mui/material';
import { Order } from './Table';
import { TableItemProps } from './Table';
import { sortTableData } from './utils/tableDataOperatorUtils';
import { TableRow, ErrorTableRow } from './TableRow';

function TableBody(props: TableBodyProps) {
  const { items, columnDataList, errorMsg, order, orderBy } = props;
  const targetColumn = columnDataList.find((cur) => cur.name === orderBy) as TableItemProps;

  if (errorMsg || !items.length) {
    return <MuiTableBody>{ErrorTableRow(columnDataList, errorMsg)}</MuiTableBody>;
  }
  return <MuiTableBody>{TableRow(sortTableData(items, targetColumn, order), columnDataList)}</MuiTableBody>;
}

export default TableBody;
interface TableBodyProps {
  columnDataList: TableItemProps[];
  items: any;
  errorMsg: string;
  order: Order;
  orderBy: any;
}
