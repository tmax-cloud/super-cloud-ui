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

export const Basic: ComponentStory<typeof Tooltip> = (props) => {
  const { content, ...rest } = props;
  return (
    <Tooltip content={content} {...rest}>
      <Button>Hover me</Button>
    </Tooltip>
  );
};

Basic.args = {
  content: 'Tooltip Label',
};
