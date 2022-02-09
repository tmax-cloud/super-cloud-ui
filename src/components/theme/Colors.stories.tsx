import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Colors } from './Colors';

export default {
  title: 'Theme/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;

export const ThemeColors = () => {
  return <Colors />;
};
