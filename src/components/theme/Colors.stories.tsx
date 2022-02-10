import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Colors as ThemeColors } from './Colors';

export default {
  title: 'Theme/Colors',
  component: ThemeColors,
  parameters: {
    options: {
      showPanel: false,
    },
  },
} as ComponentMeta<typeof ThemeColors>;

export const Colors = () => {
  return <ThemeColors />;
};
