import * as React from 'react';
import { render, screen } from '../../../test-utils';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  test('tooltip renders correctly', () => {
    const { container } = render(
      <Tooltip title="Tooltip Label" open>
        <div>Hover me</div>
      </Tooltip>,
    );
    expect(container).toMatchSnapshot();
  });
  test('tooltip text renders correctly', () => {
    render(
      <Tooltip title="Tooltip Label" open>
        <div>Hover me</div>
      </Tooltip>,
    );
    expect(screen.getByText('Tooltip Label')).toBeInTheDocument();
  });
});
