import * as React from 'react';
import * as _ from 'lodash-es';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { K8sModelType, ServiceModel } from '../../models/index';
import StatusBox from './StatusBox';
import { fixedTableItem } from './fixedTableItem';

const tableSampleItems: TableItemProps[] = [
  { name: 'name', displayTitle: 'Name', className: '' },
  { name: 'namespace', displayTitle: 'Namespace', className: '' },
];

function getProperUrl(model: K8sModelType) {
  const { apiVersion, plural } = model;
  return `/api/kubernetes/api/${apiVersion}/${plural}`;
}

function makeTableHead(tableItems: TableItemProps[]) {
  return (
    <TableRow>
      {tableItems.map((item: TableItemProps) => (
        <TableCell key={item.name} className={item.className}>
          {item.displayTitle}
        </TableCell>
      ))}
    </TableRow>
  );
}

function makeTableBody(data: any, tableItems: TableItemProps[], errorMsg: string) {
  if (errorMsg || !data.items.length) {
    return (
      <TableRow key="error-row">
        <TableCell align="center" colSpan={2}>
          <StatusBox message={errorMsg} />
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      {data.items.map((item: any) => (
        <TableRow key={item.metadata.uid}>
          {tableItems.map((currentColumnItem: TableItemProps, idx: number) => (
            <TableCell key={currentColumnItem.name}>{_.get(item, (fixedTableItem as any)[currentColumnItem.name] || currentColumnItem.ref)}</TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

export default function Table(props: TableProps) {
  const { tableItems = tableSampleItems, kindObj = ServiceModel } = props;
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
  }, []);

  return (
    <>
      {isLoaded && (
        <MuiTable aria-label="simple table">
          <TableHead>{makeTableHead(tableItems)}</TableHead>
          <TableBody>{makeTableBody(data, tableItems, errorMsg)}</TableBody>
        </MuiTable>
      )}
    </>
  );
}

interface TableItemProps {
  name: string;
  displayTitle: string;
  className: string;
  ref?: string; // 키 이름이 뭔가 맘에 안듬... 좋은 게 생각안남..
}
interface TableProps {
  tableItems: TableItemProps[];
  kindObj: K8sModelType;
}

interface MakeTableType {
  tableItems: TableItemProps[];
  data: any;
  errorMsg: string;
}
