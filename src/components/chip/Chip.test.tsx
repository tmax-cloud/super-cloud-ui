/* eslint-disable testing-library/no-container */
import * as React from 'react';
import { render } from '../../../test-utils';
import Chip from './Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const { container } = render(<Chip label="Chip 1" />);
    expect(container).toMatchSnapshot();
  });
  test('renders label correctly', () => {
    const { container } = render(<Chip label="Chip 2" />);
    const label = container.querySelector('span');
    expect(label).toHaveTextContent('Chip 2');
  });
  it('renders delete icon correctly', () => {
    const { container } = render(<Chip label="Deletable Chip" onDelete={() => {}} />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('Chip-deleteIcon');
  });
});
