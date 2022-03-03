import * as React from 'react';

export const RoundButtonItem = (itemProps: RoundButtonItemProps) => {
  const { props, item } = itemProps;
  const { role, ...rest } = props;
  return (
    <li role={role} style={{ padding: '0 0.5rem' }}>
      <button
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          padding: '1px 6px',
          maxWidth: 'calc(100% - 0.5rem)',
          minHeight: 'auto',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ededed',
          borderRadius: 12,
          color: '#8476d1',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '0.875rem',
        }}
        {...rest}
      >
        {item}
      </button>
    </li>
  );
};

export interface RoundButtonItemProps {
  props: React.HTMLAttributes<HTMLElement>;
  item: string;
}
