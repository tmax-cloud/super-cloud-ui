import { K8sModelType } from '../models';

export function getProperUrl(model: K8sModelType, requestType: RequestType) {
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

export enum RequestType {
  LIST = 'list',
  CREATE = 'create',
  DETAIL = 'detail',
}
