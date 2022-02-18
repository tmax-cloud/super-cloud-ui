import * as React from 'react';
import { Table as MuiTable } from '@mui/material';
import { K8sModelType } from '../../models/index';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useRequest from '../../apis/useRequest';
import { RequestType } from '../../apis/utils';

function Table(props: TableProps) {
  const { tableItems, kindObj } = props;
  const { isLoaded, data, errorMsg } = useRequest(kindObj, RequestType.LIST);
  return (
    <>
      {isLoaded && (
        <MuiTable aria-label="simple table">
          <TableHead tableItems={tableItems} />
          <TableBody items={data.items} tableItems={tableItems} errorMsg={errorMsg as string} />
        </MuiTable>
      )}
    </>
  );
}

Table.defaultProps = {
  tableItems: [
    { name: 'name', displayTitle: 'Name', className: '' },
    { name: 'namespace', displayTitle: 'Namespace', className: '' },
  ],
};

export interface TableProps {
  tableItems: TableItemProps[]; // 하하
  kindObj: K8sModelType;
}
export interface TableItemProps {
  name: string;
  displayTitle: string;
  className: string;
  ref?: string; // 키 이름이 뭔가 맘에 안듬... 좋은 게 생각안남..
}

export default Table;
