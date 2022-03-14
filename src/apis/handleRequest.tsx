import { getProperUrl, getProperOption } from './utils';
import { K8sKind, RequestType } from '../types';

async function handleRequest(kindObj: K8sKind, requestType: RequestType): Promise<any> {
  const url = getProperUrl(kindObj, requestType);
  const options = getProperOption(requestType);

  return await fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        // [MEMO] msw에서 명시적으로 404status를 줘도 then으로 넘어와서 ok가 아니면 throw하도록 예외처리
        throw Error(res.statusText);
      }
    })
    .catch((e) => {
      throw e;
    });
}

export default handleRequest;
