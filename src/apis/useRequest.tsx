import * as React from 'react';
import * as _ from 'lodash-es';
import { getProperUrl } from './utils';
import { K8sKind, RequestType } from '../types';

function useRequest(kindObj: K8sKind, requestType: RequestType) {
  const [isLoaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState<any>();
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const getData = React.useCallback(
    (model: K8sKind) => {
      const url = getProperUrl(model, requestType);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(_.defaultsDeep(data));
          setLoaded(true);
        })
        .catch((e) => {
          setErrorMsg(e.message);
          setLoaded(true);
        });
    },
    [requestType],
  );

  React.useEffect(() => {
    getData(kindObj);
  }, [kindObj, getData]);

  return { isLoaded, data, errorMsg };
}

export default useRequest;
