import * as React from 'react';
import * as _ from 'lodash-es';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useRequest from '../../apis/useRequest';
import { K8sKind, RequestType } from '../../types';

function Table(props: TableProps) {
  const { tableItems, kindObj } = props;
  const { isLoaded, data, errorMsg } = useRequest(kindObj, RequestType.LIST);
  return (
    <>
      {isLoaded && (
        <MuiTable aria-label="simple table">
          <TableHead tableItems={tableItems} />
          <TableBody items={data?.items} tableItems={tableItems} errorMsg={errorMsg as string} />
        </MuiTable>
      )}
    </>
  );
}

Table.defaultProps = {
  tableItems: [
    { name: 'name', displayTitle: 'Name', className: '' },
    { name: 'namespace', displayTitle: 'Namespace', className: '' },
    { name: 'type', displayTitle: 'Type', className: '', ref: 'spec.type' },
    { name: 'externalIP', displayTitle: 'External IP', className: '', customValue: (item: any) => (item.spec.type !== 'LoadBalancer' ? 'No External IP' : _.map(item.status.loadBalancer.ingress, (i) => i.hostname || i.ip || '-')) },
  ],
};

export interface TableProps {
  tableItems: TableItemProps[];
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
