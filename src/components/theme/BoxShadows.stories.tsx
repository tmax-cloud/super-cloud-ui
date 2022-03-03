import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { BoxShadows as ThemeBoxShadows } from './BoxShadows';

export default {
  title: 'Theme/Boxshadows',
  component: ThemeBoxShadows,
  parameters: {
    options: {
      showPanel: false,
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof ThemeBoxShadows>;

export const Boxshadows = () => {
  return <ThemeBoxShadows />;
};
