import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../button/Button';

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: '5em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const BasicTemplate: ComponentStory<typeof Tooltip> = () => {
  return (
    <Tooltip content="Tooltip Label">
      <Button>Hover me</Button>
    </Tooltip>
  );
};
export const Basic = BasicTemplate.bind({});
