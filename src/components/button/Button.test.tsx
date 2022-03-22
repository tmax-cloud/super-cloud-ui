import * as React from 'react';
import { render } from '../../../test-utils';
import Button, { ButtonType } from './Button';

describe('Button', () => {
  Object.values(ButtonType).forEach((type) => {
    test(`${type} button`, () => {
      const view = render(<Button type={type}>{type} Button</Button>);
      expect(view.container).toMatchSnapshot();
    });
  });
  test('disabled button', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
