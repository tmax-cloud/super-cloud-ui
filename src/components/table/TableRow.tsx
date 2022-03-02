import { TableCell, TableRow as MuiTableRow } from '@mui/material';
import { TableItemProps } from './Table';
import StatusBox from './StatusBox';
import { getTableValue } from './utils/tableDataOperatorUtils';

export const TableRow = (tableItems: any, columnDataList: TableItemProps[]) =>
  tableItems.map((item: any) => (
    <MuiTableRow key={item.metadata.uid}>
      {columnDataList.map((currentColumnItem: TableItemProps) => (
        <TableCell key={currentColumnItem.name}>{getTableValue(item, currentColumnItem)}</TableCell>
      ))}
    </MuiTableRow>
  ));

export const ErrorTableRow = (columnDataList: TableItemProps[], errorMsg: string) => (
  <TableRow key="error-row">
    <TableCell align="center" colSpan={columnDataList.length}>
      <StatusBox message={errorMsg} />
    </TableCell>
  </TableRow>
);
