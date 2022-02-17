import { rest } from 'msw';
import * as React from 'react';
import { render, screen } from '../../../test-utils';
import { server } from '../../mocks/server';
import Table from './Table';
import { ServiceModel } from '../../models/index';

describe('<Table /> snapshot test', () => {
  test('table render', () => {
    const { container } = render(
      <Table
        tableItems={[
          { name: 'name', displayTitle: 'Name', className: '' },
          { name: 'namespace', displayTitle: 'Namespace', className: '' },
        ]}
        kindObj={ServiceModel}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

test('when fetching product datas, face an error', async () => {
  server.use(
    rest.get('/api/kubernetes/api/v1/services', (req, res, ctx) => {
      return res.once(ctx.status(200), ctx.json({ items: [] }));
    }),
  );

  render(
    <Table
      tableItems={[
        { name: 'name', displayTitle: 'Name', className: '' },
        { name: 'namespace', displayTitle: 'Namespace', className: '' },
      ]}
      kindObj={ServiceModel}
    />,
  );

  const emptyBox = await screen.findByTestId('empty-box');
  expect(emptyBox).toHaveTextContent('해당 리소스를 찾을 수 없습니다.');
});
