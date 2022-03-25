import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChipGroup from './ChipGroup';
import Chip from '../chip/Chip';

export default {
  title: 'Component/ChipGroup',
  component: ChipGroup,
  decorators: [
    (Story) => (
      <div style={{ margin: '5em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ChipGroup>;

export const Basic: ComponentStory<typeof ChipGroup> = (props) => {
  const { categoryName, children, onDeleteAll, ...rest } = props;

  const [chips, setChips] = React.useState([
    'Chip one',
    'Chip two',
    'Really long chip that goes on and on',
  ]);

  const handleDeleteAll = () => {
    setChips([]);
  };

  const handleDelete = (chipToDelete: string) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <ChipGroup categoryName={categoryName} onDeleteAll={handleDeleteAll} {...rest}>
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={handleDelete(chip)} />
      ))}
    </ChipGroup>
  );
};

Basic.args = {
  categoryName: 'Category one has a very long name',
};
