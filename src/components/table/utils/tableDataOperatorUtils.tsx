import * as _ from 'lodash-es';
import * as React from 'react';
import StatusBox from '../StatusBox';
import { fixedTableItem } from './fixedTableItem';
import { TableItemProps } from '../Table';

export const getTableValue = (item: any, currentColumnItem: TableItemProps) => {
  const { customValue, name, ref } = currentColumnItem;
  if (customValue) {
    return customValue(item);
  }

  return _.get(item, (fixedTableItem as any)[name] || ref);
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
