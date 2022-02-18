import { K8sKind, RequestType } from '../types';

export function getProperUrl(model: K8sKind, requestType: RequestType) {
  const { apiVersion, plural } = model;

  switch (requestType) {
    case 'list': {
      return `/super-cloud-ui/api/kubernetes/api/${apiVersion}/${plural}/`;
    }
    default: {
      throw Error('url을 찾을 수 없습니다.');
    }
  }
}
