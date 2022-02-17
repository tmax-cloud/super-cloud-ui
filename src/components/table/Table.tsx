import * as React from 'react';
import * as _ from 'lodash-es';
import { Table as MuiTable } from '@mui/material';
import { K8sModelType } from '../../models/index';
import TableHead from './TableHead';
import TableBody from './TableBody';

function getProperUrl(model: K8sModelType) {
  const { apiVersion, plural } = model;
  return `/api/kubernetes/api/${apiVersion}/${plural}`;
}

function Table(props: TableProps) {
  const { tableItems, kindObj } = props;
  const [isLoaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState<any>();
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const getData = (model: K8sModelType) => {
    fetch(getProperUrl(model))
      .then((response) => response.json())
      .then((data) => {
        // setData({ items: [] }); // 빈 배열 테스트
        setData(_.defaultsDeep(data));
        setLoaded(true);
      })
      .catch((e) => {
        setErrorMsg(e.message);
        setLoaded(true);
      });
  };

  React.useEffect(() => {
    getData(kindObj);
  }, [kindObj]);

  return (
    <>
      {isLoaded && (
        <MuiTable aria-label="simple table">
          <TableHead tableItems={tableItems} />
          <TableBody items={data.items} tableItems={tableItems} errorMsg={errorMsg} />
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
