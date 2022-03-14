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
  /*test('renders correctly if option type is label', () => {
    render(<Autocomplete open options={['one', 'two']} renderLabelOption renderInput={(params) => <TextField {...params} />} />);
    const listbox = screen.getByRole('listbox');
    const options = screen.getAllByRole('option');
    // check option size
    expect(options).toHaveLength(2);
    // check listbox contains options
    options.forEach((option) => {
      expect(listbox).toContainElement(option);
    });
    // check button style
    const button = screen.getAllByRole('button')[0];
    expect(button).toHaveStyle('color: #8476d1');
  });*/
});
