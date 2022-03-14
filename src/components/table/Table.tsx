import * as React from 'react';
import { Table as MuiTable } from '@mui/material';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useRequest from '../../apis/useRequest';
import { K8sKind, RequestType } from '../../types';

function Table(props: TableProps) {
  const { columnDataList, kindObj } = props;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState(columnDataList[0].name);
  const { isLoaded, data, errorMsg } = useRequest(kindObj, RequestType.LIST);

  const handleRequestSort = React.useCallback(
    (event: React.MouseEvent<unknown>, property: any) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [order, orderBy],
  );

  return (
    <>
      {isLoaded && (
        <MuiTable aria-label="simple table">
          <TableHead columnDataList={columnDataList} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody items={data?.items} columnDataList={columnDataList} errorMsg={errorMsg as string} order={order} orderBy={orderBy} />
        </MuiTable>
      )}
    </>
  );
}

export type Order = 'asc' | 'desc';
export interface TableProps {
  columnDataList: TableItemProps[];
  kindObj: K8sKind;
}
export interface TableItemProps {
  name: string;
  displayTitle: string;
  className: string;
  ref?: string; // 키 이름이 뭔가 맘에 안듬... 좋은 게 생각안남..
  customValue?: any;
  customKebabItems?: any[];
}

export default Table;
