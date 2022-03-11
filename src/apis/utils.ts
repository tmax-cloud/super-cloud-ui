import { K8sKind, RequestType } from '../types';

const TEMPORARY_NAMESPACE = 'test_ns'; // 네임스페이스 선택 기능 대신 임의로
const TEMPORARY_TARGET = 'test_resource';

export function getProperUrl(model: K8sKind, requestType: RequestType) {
  const { apiVersion, plural, namespaced } = model;

  let url = `/api/kubernetes/api/${apiVersion}`;
  if (isNamespaced(namespaced)) {
    url += `/namespaces/${TEMPORARY_NAMESPACE}`;
  }
  if (hasPlural(plural)) {
    url += `/${plural}`;
  }

  switch (requestType) {
    case 'list': {
      return url;
    }
    case 'delete': {
      return url + '/' + TEMPORARY_TARGET;
    }
    default: {
      throw Error('url을 찾을 수 없습니다.');
    }
  }
}

export const getProperOption = (requestType: RequestType) => {
  switch (requestType) {
    case 'delete': {
      return { method: 'DELETE' };
    }
  }
};

const isNamespaced = (namespaced: boolean) => namespaced;

const hasPlural = (plural: string) => !!plural;
