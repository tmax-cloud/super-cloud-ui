import * as React from 'react';
import { TableBody as MuiTableBody } from '@mui/material';
import { Order } from './Table';
import { TableItemProps } from './Table';
import { makeTableRow, sortTableData, makeErrorTableRow } from './utils/tableDataOperatorUtils';

function TableBody(props: TableBodyProps) {
  const { items, columnDataList, errorMsg, order, orderBy } = props;
  const targetColumn = columnDataList.find((cur) => cur.name === orderBy) as TableItemProps;

  if (errorMsg || !items.length) {
    return <MuiTableBody>{makeErrorTableRow(columnDataList, errorMsg)}</MuiTableBody>;
  }
  return <MuiTableBody>{makeTableRow(sortTableData(items, targetColumn, order), columnDataList)}</MuiTableBody>;
}

export default TableBody;
interface TableBodyProps {
  columnDataList: TableItemProps[];
  items: any;
  errorMsg: string;
  order: Order;
  orderBy: any;
}
