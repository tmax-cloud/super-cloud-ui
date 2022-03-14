import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { server } from '../../mocks/server';
import Table from './Table';
import { ServiceModel } from '../../models/index';

function setup() {
  return render(
    <Table
      columnDataList={[
        { name: 'name', displayTitle: 'Name', className: '' },
        { name: 'namespace', displayTitle: 'Namespace', className: '' },
      ]}
      kindObj={ServiceModel}
    />,
  );
}

describe('테이블 테스트', () => {
  test('테이블 스냅샷 테스트', async () => {
    setup();
    const table = await screen.findByRole('table');
    expect(table).toMatchSnapshot();
  });

  test('빈 배열 왔을 때 `해당 리소스를 찾을 수 없습니다.` 잘 뜨는지 테스트', async () => {
    server.use(
      rest.get('/api/kubernetes/api/v1/namespaces/test_ns/services', (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json({ items: [] }));
      }),
    );

    setup();

    const emptyBox = await screen.findByTestId('empty-box');
    expect(emptyBox).toHaveTextContent('해당 리소스를 찾을 수 없습니다.');
  });

  test('서버 에러 404일 때 errorMsg 잘 뜨는지 테스트', async () => {
    server.use(
      rest.get('/api/kubernetes/api/v1/namespaces/test_ns/services', (req, res, ctx) => {
        return res.once(ctx.status(404));
      }),
    );

    setup();

    const errorBox = await screen.findByTestId('error-box');
    expect(errorBox).toHaveTextContent('Unexpected end of JSON input');
  });

  // MuiTableSortLabel-iconDirectionDesc로 바껴있는 걸 확인 가능.
  test('sort 버튼 클릭시에 icon 변경 테스트', async () => {
    setup();
    const sortBtn = await screen.findAllByRole('button');
    userEvent.click(sortBtn[0]);
    expect(screen.getAllByTestId('ArrowDownwardIcon')[0]).toHaveClass('MuiTableSortLabel-iconDirectionDesc');
  });

  test('sort 버튼 클릭시에 제대로 sorting 이루어지는지', async () => {
    setup();
    const sortBtn = await screen.findAllByRole('button');
    userEvent.click(sortBtn[0]);
    expect(screen.getByTestId('0_0_cell')).toHaveTextContent('console');
  });
});
