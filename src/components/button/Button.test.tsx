import * as React from 'react';
import { render } from '../../../test-utils';
import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
