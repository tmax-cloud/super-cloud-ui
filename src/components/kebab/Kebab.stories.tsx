import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Kebab from './Kebab';

export default {
  title: 'Component/Kebab',
  component: Kebab,
} as ComponentMeta<typeof Kebab>;

export const Basic: ComponentStory<typeof Kebab> = (props) => <Kebab {...props} />;
