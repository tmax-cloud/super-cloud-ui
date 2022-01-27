import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TooltipLinkButton from './TooltipLinkButton';

export default {
  title: 'Component/Button/TooltipLinkButton',
  component: TooltipLinkButton,
  argTypes: {},
} as ComponentMeta<typeof TooltipLinkButton>;

const Template: ComponentStory<typeof TooltipLinkButton> = (args) => <TooltipLinkButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttonText: '파드 생성',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  buttonText: '파드 생성',
  tooltipText: '먼저 네임스페이스를 생성해주세요',
};
