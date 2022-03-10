import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src/themes';
import ThemeWrapper from '../src/themes/ThemeWrapper';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

// Initialize MSW
initialize();

// if (process.env.NODE_ENV === 'development') {
const { worker } = require('../src/mocks/browser');
worker.start({
  serviceWorker: {
    url: location.href.includes('github.io') ? '/super-cloud-ui/mockServiceWorker.js' : '/mockServiceWorker.js',
  },
  onUnhandledRequest: 'bypass',
});
// }

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'alpha',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
  },
  options: {
    showPanel: true,
    storySort: {
      method: 'alphabetical',
      order: ['Overview', 'Theme', 'Component', 'Template', 'Page'],
    },
  },
};

export const decorators = [
  mswDecorator,
  // 커스텀 테마 적용을 위한 ThemeProvider 추가 (storybook 한정)
  (Story) => (
    <ThemeProvider theme={theme}>
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    </ThemeProvider>
  ),
  withTests({
    results,
  }),
];
