import { rest } from 'msw';
import * as React from 'react';
import { render, screen } from '../../../test-utils';
import { server } from '../../mocks/server';
import Table from './Table';
import { ServiceModel } from '../../models/index';

describe('<Table /> 스냅샷 테스트', () => {
  test('table render', () => {
    const { container } = render(
      <Table
        columnDataList={[
          { name: 'name', displayTitle: 'Name', className: '' },
          { name: 'namespace', displayTitle: 'Namespace', className: '' },
        ]}
        kindObj={ServiceModel}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

test('빈 배열 왔을 때 `해당 리소스를 찾을 수 없습니다.` 잘 뜨는지 테스트', async () => {
  server.use(
    rest.get('/api/kubernetes/api/v1/services', (req, res, ctx) => {
      return res.once(ctx.status(200), ctx.json({ items: [] }));
    }),
  );

  render(
    <Table
      columnDataList={[
        { name: 'name', displayTitle: 'Name', className: '' },
        { name: 'namespace', displayTitle: 'Namespace', className: '' },
      ]}
      kindObj={ServiceModel}
    />,
  );

  const emptyBox = await screen.findByTestId('empty-box');
  expect(emptyBox).toHaveTextContent('해당 리소스를 찾을 수 없습니다.');
});

test('서버 에러 404일 때 errorMsg 잘 뜨는지 테스트', async () => {
  server.use(
    rest.get('/api/kubernetes/api/v1/services', (req, res, ctx) => {
      return res.once(ctx.status(404));
    }),
  );

  render(
    <Table
      columnDataList={[
        { name: 'name', displayTitle: 'Name', className: '' },
        { name: 'namespace', displayTitle: 'Namespace', className: '' },
      ]}
      kindObj={ServiceModel}
    />,
  );

  const errorBox = await screen.findByTestId('error-box');
  expect(errorBox).toHaveTextContent('Unexpected end of JSON input');
});