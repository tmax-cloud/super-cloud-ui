import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Component/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = (props) => {
  const { renderLabel, items, onChange, sx, ...rest } = props;
  const [value, setValue] = React.useState('');

  return (
    <Select
      renderLabel={renderLabel}
      items={items}
      value={value}
      onChange={(e) => setValue(e.target.value as string)}
      sx={sx}
      {...rest}
    />
  );
};

Basic.args = {
  renderLabel: 'Select',
  items: [
    { value: 'Oliver Hansen', content: 'Oliver Hansen' },
    { value: 'Van Henry', content: 'Van Henry' },
    { value: 'April Tucker', content: 'April Tucker' },
    { value: 'Ralph Hubbard', content: 'Ralph Hubbard' },
  ],
  sx: { minWidth: 120 },
};
