import * as React from 'react';
import * as _ from 'lodash-es';
import { Table as MuiTable } from '@mui/material';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useRequest from '../../apis/useRequest';
import { K8sKind, RequestType } from '../../types';
import { ServiceModel } from '../../models/index';

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
const customValueSample = (item: any) => {
  if (item.spec.type !== 'LoadBalancer') {
    return 'No External IP';
  }
  return _.map(item.status.loadBalancer.ingress, (i) => i.hostname || i.ip || '-');
};
Table.defaultProps = {
  columnDataList: [
    { name: 'name', displayTitle: 'Name', className: '' },
    { name: 'namespace', displayTitle: 'Namespace', className: '' },
    { name: 'type', displayTitle: 'Type', className: '', ref: 'spec.type' },
    { name: 'externalIP', displayTitle: 'External IP', className: '', customValue: customValueSample },
  ],
  kindObj: ServiceModel,
};

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
}

export default Table;
