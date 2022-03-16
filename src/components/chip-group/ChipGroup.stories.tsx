import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChipGroup from './ChipGroup';
import Chip from '../chip/Chip';

export default {
  title: 'Component/Chip/ChipGroup',
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
  const { isClosable, ...rest } = props;
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <ChipGroup isClosable {...rest}>
      <Chip label="Chip one" onDelete={handleDelete} />
      <Chip label="Chip two" onDelete={handleDelete} />
      <Chip label="Really long chip that goes on and on" onDelete={handleDelete} />
    </ChipGroup>
  );
};

Basic.args = {
  title: 'Category one',
};
