import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src/themes';
import ThemeWrapper from '../src/themes/ThemeWrapper';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
  },
};

// 커스텀 테마 적용을 위한 ThemeProvider 추가 (storybook 한정)
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    </ThemeProvider>
  ),
  mswDecorator,
];
