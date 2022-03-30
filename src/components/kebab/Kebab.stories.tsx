import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Kebab from './Kebab';
import { ServiceModel } from '../../models';

export default {
  title: 'Component/Kebab',
  component: Kebab,
} as ComponentMeta<typeof Kebab>;

export const Basic: ComponentStory<typeof Kebab> = (props) => <Kebab {...props} />;

Basic.args = {
  kindObj: ServiceModel,
};
