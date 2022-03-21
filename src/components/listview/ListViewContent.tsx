/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import TextField from '../textfield/TextField';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddIcon from '@mui/icons-material/Add';
import { ListItemType } from './Listview';

const contentStyle = css`
  display: flex;
  position: relative;
  padding-bottom: 15px;
`;

const contentCellStyle = css`
  width: calc(100% / 2);
  padding-right: 15px;
`;

const buttonWrapperStyle = css`
  position: relative;
  right: 0px;
`;

function ListViewContent(props: ListViewContentProps) {
  const { contents: defaultContents } = props;
  const [contents, setContents] = React.useState<ListItemType[]>([...defaultContents]);
  return (
    <>
      {contents.map(({ key, value }, idx) => (
        <div css={contentStyle} key={`${key}_${value}`}>
          <div css={contentCellStyle}>
            <TextField placeholder="key" defaultValue={key} />
          </div>
          <div css={contentCellStyle}>
            <TextField placeholder="value" defaultValue={value} />
          </div>
          <div css={buttonWrapperStyle}>
            <IconButton
              onClick={() => {
                setContents((currentContents) => {
                  currentContents.splice(idx, 1);
                  return [...currentContents];
                });
              }}
            >
              <RemoveCircleIcon />
            </IconButton>
          </div>
        </div>
      ))}
      <IconButton
        onClick={() => {
          setContents((currentContents): ListItemType[] => {
            if (currentContents.findIndex((content) => content.key === '' && content.value === '') < 0) {
              return [...currentContents, { key: '', value: '' }];
            }
            return currentContents;
          });
        }}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}

export default ListViewContent;

interface ListViewContentProps {
  contents: ListItemType[];
}
