import * as React from 'react';
import { render, screen } from '../../../test-utils';
import TextField from '../textfield/TextField';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  test('renders correctly', () => {
    const { container } = render(<Autocomplete open options={['one', 'two']} renderInput={(params) => <TextField {...params} />} />);
    expect(container).toMatchSnapshot();
  });
  test('renders correctly if option type is label', () => {
    render(<Autocomplete open options={['one', 'two']} optionType="label" renderInput={(params) => <TextField {...params} />} />);
    const listbox = screen.getByRole('listbox');
    const options = screen.getAllByRole('option');
    // check option size
    expect(options).toHaveLength(7);
    // check listbox contains options
    options.forEach((option) => {
      expect(listbox).toContainElement(option);
    });
    // check button style
    const button = screen.getAllByRole('button')[0];
    expect(button).toHaveStyle('color: #8476d1');
  });
});
