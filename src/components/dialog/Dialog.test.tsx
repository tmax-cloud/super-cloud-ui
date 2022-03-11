import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { server } from '../../mocks/server';
import DeleteResourceDialog, { DialogSize } from './DeleteResourceDialog';
import { ServiceModel } from '../../models/index';

function setup() {
  return render(<DeleteResourceDialog isOpen={true} title="Delete Resource Dialog" saveButtonText="Confirm" cancelButtonText="Cancel" resourceName="podName_01" namespaceName="namespaceName_01" size={DialogSize.medium} kindObj={ServiceModel} />);
}

describe('삭제 다이알로그 테스트', () => {
  test('테이블 스냅샷 테스트', async () => {
    setup();

    const dialog = await screen.findByRole('dialog');
    expect(dialog).toMatchSnapshot();
  });

  test('delete Dialog에서 에러 발생시 validation 문구 테스트', async () => {
    server.use(
      rest.delete('/api/kubernetes/api/v1/namespaces/test_ns/services/test_resource', (req, res, ctx) => {
        return res.once(ctx.status(404), ctx.json({ errorMessage: 'server Error' }));
      }),
    );
    setup();

    const confirmButton = screen.getByText('Confirm');
    userEvent.click(confirmButton);

    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
