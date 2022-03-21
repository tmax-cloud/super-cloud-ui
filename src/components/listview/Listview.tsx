/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import ListViewHeader from './ListViewHeader';
import ListViewContent from './ListViewContent';

const ListViewStyle = css`
  width: 100%;
  margin: 15px;
`;

function Listview(props: ListviewProps) {
  const { contents, headerList } = props;

  return (
    <div css={ListViewStyle}>
      <ListViewHeader headerList={headerList}></ListViewHeader>
      <ListViewContent contents={contents}></ListViewContent>
    </div>
  );
}

interface ListviewProps {
  contents: ListItemType[];
  headerList: string[];
}

export interface ListItemType {
  key: string;
  value: string;
}

export default Listview;
