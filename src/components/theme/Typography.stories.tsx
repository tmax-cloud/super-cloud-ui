import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Typography as ThemeTypography } from './Typography';

export default {
  title: 'Theme/Typography',
  component: ThemeTypography,
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
} as ComponentMeta<typeof ThemeTypography>;

export const Typography = () => {
  return <ThemeTypography />;
};
