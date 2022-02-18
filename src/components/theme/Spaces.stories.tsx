import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Spaces as ThemeSpaces } from './Spaces';

export default {
  title: 'Theme/Spaces',
  component: ThemeSpaces,
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
} as ComponentMeta<typeof ThemeSpaces>;

export const Spaces = () => {
  return <ThemeSpaces />;
};
