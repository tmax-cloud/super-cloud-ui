import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const BasicTemplate: ComponentStory<typeof Button> = () => {
  return <Button>Button</Button>;
};
export const Basic = BasicTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Button> = () => {
  return <Button disabled>Button</Button>;
};
export const Disabled = DisabledTemplate.bind({});
