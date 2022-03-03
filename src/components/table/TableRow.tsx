import { TableCell, TableRow as MuiTableRow } from '@mui/material';
import { TableItemProps } from './Table';
import StatusBox from './StatusBox';
import { getTableValue } from './utils/tableDataOperatorUtils';

export const TableRow = (tableItems: any, columnDataList: TableItemProps[]) =>
  tableItems.map((item: any, rowIdx: number) => (
    <MuiTableRow key={item.metadata.uid}>
      {columnDataList.map((currentColumnItem: TableItemProps, columnIdx: number) => (
        <TableCell key={currentColumnItem.name} data-testid={`${rowIdx}_${columnIdx}_cell`}>
          {getTableValue(item, currentColumnItem)}
        </TableCell>
      ))}
    </MuiTableRow>
  ));

export const ErrorTableRow = (columnDataList: TableItemProps[], errorMsg: string) => (
  <MuiTableRow key="error-row">
    <TableCell align="center" colSpan={columnDataList.length}>
      <StatusBox message={errorMsg} />
    </TableCell>
  </MuiTableRow>
);
