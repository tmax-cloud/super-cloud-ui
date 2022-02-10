import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Colors as ThemeColors } from './Colors';

export default {
  title: 'Theme/Colors',
  component: ThemeColors,
} as ComponentMeta<typeof ThemeColors>;

export const Colors = () => {
  return <ThemeColors />;
};
