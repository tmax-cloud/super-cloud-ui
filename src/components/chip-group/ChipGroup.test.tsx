import * as React from 'react';
import { render } from '../../../test-utils';
import ChipGroup from './ChipGroup';
import Chip from '../chip/Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const { container } = render(
      <ChipGroup>
        <Chip label="Chip 1" />
      </ChipGroup>,
    );
    expect(container).toMatchSnapshot();
  });
  test('chip group with category', () => {
    const { container } = render(
      <ChipGroup categoryName="category">
        <Chip label="Chip 1" />
      </ChipGroup>,
    );
    expect(container).toMatchSnapshot();
  });
  test('chip group with deletable category', () => {
    const { container } = render(
      <ChipGroup categoryName="category" onDeleteAll={() => {}}>
        <Chip label="Chip 1" />
      </ChipGroup>,
    );
    expect(container).toMatchSnapshot();
  });
  test('chip group with category and tooltip', () => {
    const { container } = render(
      <ChipGroup categoryName="A very long category name">
        <Chip label="Chip 1" />
      </ChipGroup>,
    );
    expect(container).toMatchSnapshot();
  });
  test('chip group will not render if no children passed', () => {
    const { container } = render(<ChipGroup />);
    expect(container.innerHTML).toHaveLength(0);
  });
});
