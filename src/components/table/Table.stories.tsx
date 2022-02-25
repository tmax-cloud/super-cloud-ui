import React from 'react';
import * as _ from 'lodash-es';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceModel } from '../../models/index';

import Table from './Table';

const customValueSample = (item: any) => {
  if (item.spec.type !== 'LoadBalancer') {
    return 'No External IP';
  }
  return _.map(item.status.loadBalancer.ingress, (i) => i.hostname || i.ip || '-');
};

export default {
  title: 'Component/Table',
  component: Table,
  argTypes: {
    tableItems: {
      description: `table colum 설정 {name, displayTitle, className}[]`,
      defaultValue: [
        { name: 'name', displayTitle: 'Name', className: '' },
        { name: 'namespace', displayTitle: 'Namespace', className: '' },
        { name: 'type', displayTitle: 'Type', className: '', ref: 'spec.type' },
        { name: 'externalIP', displayTitle: 'External IP', className: '', customValue: customValueSample },
      ],
    },
    kindObj: {
      description: `해당 페이지의 리소스 모델 정보`,
      defaultValue: ServiceModel,
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
