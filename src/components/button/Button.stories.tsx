import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (props) => {
  return <Button {...props}>Button</Button>;
};

export const Disabled: ComponentStory<typeof Button> = (props) => {
  const { disabled, ...rest } = props;
  return (
    <Button disabled={disabled} {...rest}>
      Button
    </Button>
  );
};

Disabled.args = {
  disabled: true,
};
