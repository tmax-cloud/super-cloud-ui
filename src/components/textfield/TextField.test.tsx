import * as React from 'react';
import { render, screen } from '../../../test-utils';
import TextField from './TextField';

describe('TextField', () => {
  test('renders correctly', () => {
    const { container } = render(<TextField />);
    expect(container).toMatchSnapshot();
  });
  test('with a value', () => {
    render(<TextField value="foo" />);
    expect(screen.getByDisplayValue('foo')).toBeInTheDocument();
  });
  test('with a helper text', () => {
    render(<TextField helperText="Foo bar" />);
    expect(screen.getByText('Foo bar')).toBeInTheDocument();
  });
});
