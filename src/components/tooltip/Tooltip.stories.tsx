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

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Tooltip Label',
  children: <Button>Hover me</Button>,
};

Basic.parameters = {
  jest: 'Tooltip.test.tsx',
};