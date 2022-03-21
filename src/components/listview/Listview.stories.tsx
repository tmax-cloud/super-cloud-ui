/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Listview from './Listview';

const listviewWrapperStyle = css`
  width: 500px;
`;

export default {
  title: 'Component/Listview',
  component: Listview,
} as ComponentMeta<typeof Listview>;

export const Basic: ComponentStory<typeof Listview> = (props) => {
  const { headerList, contents, ...rest } = props;

  return (
    <div id="listview-wrapper" css={listviewWrapperStyle}>
      <Listview {...rest} headerList={headerList} contents={contents} />
    </div>
  );
};

Basic.args = {
  headerList: ['Key', 'Value'],
  contents: [
    {
      key: 'testKey',
      value: 'testValue',
    },
  ],
};
