import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Autocomplete from './Autocomplete';
import TextField from '../textfield/TextField';

export default {
  title: 'Component/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const TextfieldTemplate: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete
      options={[
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6',
        'Option 7',
        'Option 8',
        'Option 9',
      ]}
      renderInput={(params) => <TextField placeholder="Type something..." {...params} />}
      sx={{ width: 300 }}
    />
  );
};
export const Textfield = TextfieldTemplate.bind({});

const TextfieldWithLabelListTemplate: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete
      optionType="label"
      options={[
        'Lorem',
        'ipsum-incididunt',
        'adipiscing-dolore-magna',
        'dolor-sit',
        'amet-consectetur',
        'Ut-enim-ad-minim-veniam-quis-nostrud',
        'tempor',
        'incididunt',
        'Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
      ]}
      renderInput={(params) => <TextField placeholder="Type something..." {...params} />}
      sx={{ width: 300 }}
    />
  );
};
export const TextfieldWithLabelList = TextfieldWithLabelListTemplate.bind({});
TextfieldWithLabelList.storyName = 'Textfield with label list';
