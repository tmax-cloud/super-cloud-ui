/* eslint-disable testing-library/no-container */
import * as React from 'react';
import { render } from '../../../test-utils';
import Select from './Select';

describe('Select', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Select
        items={[
          { value: 'one', content: 'one' },
          { value: 'two', content: 'two' },
        ]}
        value="one"
      />,
    );
    expect(container).toMatchSnapshot();
  });
  test('render label correctly', () => {
    const { container } = render(
      <Select
        items={[
          { value: 'one', content: 'one' },
          { value: 'two', content: 'two' },
        ]}
        value=""
        renderLabel="Select"
      />,
    );
    expect(container.querySelector('label')).toHaveTextContent('Select');
  });
});
