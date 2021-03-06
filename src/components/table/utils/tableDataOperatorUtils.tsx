import * as _ from 'lodash-es';
import { fixedTableItem } from './fixedTableItem';
import { TableItemProps } from '../Table';

export const getTableValue = (item: any, currentColumnItem: TableItemProps) => {
  const { customValue, name, ref } = currentColumnItem;
  if (customValue) {
    return customValue(item);
  }

  return _.get(item, ref || (fixedTableItem as any)[name]);
};

export const sortTableData = (items: any, targetColumn: TableItemProps, order: 'asc' | 'desc') =>
  items.sort((a: any, b: any) => {
    const current_a = getTableValue(a, targetColumn);
    const current_b = getTableValue(b, targetColumn);
    if (current_a > current_b) {
      return order === 'asc' ? 1 : -1;
    }
    if (current_a < current_b) {
      return order === 'asc' ? -1 : 1;
    }
    return 0;
  });
