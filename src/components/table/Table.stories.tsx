import * as _ from 'lodash-es';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceModel } from '../../models';
import AnnotationDialog from '../dialog/AnnotationDialog';

import Table from './Table';

export default {
  title: 'Component/Table',
  component: Table,
  argTypes: {
    columnDataList: {
      description: `table colum 설정 {name, displayTitle, className}[]`,
    },
    kindObj: {
      description: `해당 페이지의 리소스 모델 정보`,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6Dn6VqHNNjZ2PVUywsWB2/01.%5BGUI%5DTmaxCloud_Portal_GUI_Guideline?node-id=0%3A1',
    },
  },
} as ComponentMeta<typeof Table>;

export const Basic: ComponentStory<typeof Table> = ({ columnDataList, kindObj, ...rest }) => (
  <Table {...rest} columnDataList={columnDataList} kindObj={kindObj} />
);

const customValueSample = (item: any) => {
  if (item.spec.type !== 'LoadBalancer') {
    return 'No External IP';
  }
  return _.map(item.status.loadBalancer.ingress, (i) => i.hostname || i.ip || '-');
};

Basic.args = {
  columnDataList: [
    { name: 'name', displayTitle: 'Name', className: '' },
    { name: 'namespace', displayTitle: 'Namespace', className: '' },
    { name: 'type', displayTitle: 'Type', className: '', ref: 'spec.type' },
    {
      name: 'externalIP',
      displayTitle: 'External IP',
      className: '',
      customValue: customValueSample,
    },
    {
      name: 'kebab',
      displayTitle: '',
      customKebabItems: [
        () => ({
          label: 'Annotation',
          children: AnnotationDialog,
        }),
      ],
      className: '',
    },
  ],
  kindObj: ServiceModel,
};
