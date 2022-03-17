import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultipleSelect } from './MultipleSelect';

export default {
  title: 'Component/Select/MultipleSelect',
  component: MultipleSelect,
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (props) => {
  const { label, items, helperText, ...rest } = props;
  return <MultipleSelect label={label} items={items} helperText={helperText} {...rest} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Name',
  items: [
    { key: 'Oliver Hansen', value: 'Oliver Hansen' },
    { key: 'Van Henry', value: 'Van Henry' },
    { key: 'April Tucker', value: 'April Tucker' },
    { key: 'Ralph Hubbard', value: 'Ralph Hubbard' },
    { key: 'Omar Alexander', value: 'Omar Alexander' },
    { key: 'Carlos Abbott', value: 'Carlos Abbott' },
    { key: 'Miriam Wagner', value: 'Miriam Wagner' },
    { key: 'Bradley Wilkerson', value: 'Bradley Wilkerson' },
    { key: 'Virginia Andrews', value: 'Virginia Andrews' },
    { key: 'Kelly Snyder', value: 'Kelly Snyder' },
  ],
  helperText: 'Select Name',
};
