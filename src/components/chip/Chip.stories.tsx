import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from './Chip';

export default {
  title: 'Component/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Basic: ComponentStory<typeof Chip> = (props) => {
  const { label, onDelete, ...rest } = props;
  return <Chip label={label} {...rest} />;
};

Basic.args = {
  label: 'Chip 1',
};

export const Deletable: ComponentStory<typeof Chip> = (props) => {
  const { label, onDelete, ...rest } = props;
  return (
    <Chip
      label={label}
      onDelete={() => {
        console.info('You clicked the delete icon.');
      }}
      {...rest}
    />
  );
};

Deletable.args = {
  label: 'Really long chip that goes on and on',
};
