/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  display: flex;
  margin-bottom: 5px;
`;

const headCellStyle = css`
  width: calc(100% / 2);
`;

function ListViewHeader(props: ListViewHeaderProps) {
  const { headerList } = props;

  return (
    <>
      <header css={headerStyle}>
        {headerList.map((head, idx) => (
          <div key={`${head}_idx`} css={headCellStyle}>
            {head}
          </div>
        ))}
      </header>
    </>
  );
}

interface ListViewHeaderProps {
  headerList: string[];
}

export default ListViewHeader;
