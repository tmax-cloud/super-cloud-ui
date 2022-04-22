module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-jest', '@storybook/preset-create-react-app','storybook-addon-designs'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
