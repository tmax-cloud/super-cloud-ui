import React from 'react';
import * as _ from 'lodash-es';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
