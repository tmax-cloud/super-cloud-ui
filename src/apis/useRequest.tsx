import * as React from 'react';
import * as _ from 'lodash-es';
import { getProperUrl, RequestType } from './utils';
import { K8sModelType } from '../models';

function useRequest(kindObj: K8sModelType, requestType: RequestType) {
  const [isLoaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState<any>();
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const getData = (model: K8sModelType) => {
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
  };

  React.useEffect(() => {
    getData(kindObj);
  }, [kindObj]);

  return { isLoaded, data, errorMsg };
}

export default useRequest;
