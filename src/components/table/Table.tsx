import * as React from 'react';
import * as _ from 'lodash-es';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { K8sModelType, ServiceModel } from '../../models/index';
import ErrorBanner from './TableError';
import { fixedTableItem } from './fixedTableItem';

const tableSampleItems: TableItemProps[] = [
  { name: 'name', displayTitle: 'Name', className: '' },
  { name: 'namespace', displayTitle: 'Namespace', className: '' },
];

function getProperUrl(model: K8sModelType) {
  const { apiVersion, plural } = model;
  return `/api/kubernetes/api/${apiVersion}/${plural}?limit=250`;
}

function makeTable({ tableItems, data, errorMsg }: MakeTableType) {
  console.log((fixedTableItem as any)['name']);
  return (
    <>
      <TableHead>
        <TableRow>
          {tableItems.map((item: TableItemProps) => (
            <TableCell key={item.name} className={item.className}>
              {item.displayTitle}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      {errorMsg ? (
        <TableBody>
          <TableRow key="error-row">
            <TableCell align="center" colSpan={2}>
              <ErrorBanner message={errorMsg} />
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {data.items.map((item: any) => (
            <TableRow key={item.metadata.uid}>
              {tableItems.map((currentColumnItem: TableItemProps, idx: number) => (
                <TableCell key={currentColumnItem.name}>{_.get(item, (fixedTableItem as any)[currentColumnItem.name] || currentColumnItem.ref)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
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
        if (!data.items.length) {
          throw new Error('Empty items');
        }
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

  return <>{isLoaded && <MuiTable aria-label="simple table">{makeTable({ tableItems, data, errorMsg })}</MuiTable>}</>;
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
