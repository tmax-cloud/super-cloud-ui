import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceModel } from '../../models/index';

import Table from './Table';

export default {
  title: 'Component/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table
    tableItems={[
      { name: 'name', displayTitle: 'Name', className: '' },
      { name: 'namespace', displayTitle: 'Namespace', className: '' },
    ]}
    kindObj={ServiceModel}
  />
);

export const Basic = Template.bind({});
