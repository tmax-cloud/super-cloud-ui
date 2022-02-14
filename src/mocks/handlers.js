import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:6006/api/kubernetes/apis/apiregistration.k8s.io/v1/apiservices?limit=250', (req, res, ctx) => {
    return res(
      ctx.json({
        items: [
          {
            metadata: {
              name: 'v2beta1.autoscaling',
              selfLink: '/apis/apiregistration.k8s.io/v1/apiservices/v2beta1.autoscaling',
              uid: '9f34a224-3e55-44cc-84e1-17e9d9b5af2b',
              resourceVersion: '21',
              creationTimestamp: '2021-12-10T05:02:45Z',
              labels: {
                'kube-aggregator.kubernetes.io/automanaged': 'onstart',
              },
            },
            spec: {
              group: 'autoscaling',
              version: 'v2beta1',
              groupPriorityMinimum: 17500,
              versionPriority: 9,
            },
            status: {
              conditions: [
                {
                  type: 'Available',
                  status: 'True',
                  lastTransitionTime: '2021-12-10T05:02:45Z',
                  reason: 'Local',
                  message: 'Local APIServices are always available',
                },
              ],
            },
          },
          {
            metadata: {
              name: 'v2beta2.autoscaling',
              selfLink: '/apis/apiregistration.k8s.io/v1/apiservices/v2beta2.autoscaling',
              uid: '26ef28ad-74f9-4c8f-a3a2-fd44e46ad032',
              resourceVersion: '23',
              creationTimestamp: '2021-12-10T05:02:45Z',
              labels: {
                'kube-aggregator.kubernetes.io/automanaged': 'onstart',
              },
            },
            spec: {
              group: 'autoscaling',
              version: 'v2beta2',
              groupPriorityMinimum: 17500,
              versionPriority: 1,
            },
            status: {
              conditions: [
                {
                  type: 'Available',
                  status: 'True',
                  lastTransitionTime: '2021-12-10T05:02:45Z',
                  reason: 'Local',
                  message: 'Local APIServices are always available',
                },
              ],
            },
          },
        ],
      }),
    );
  }),
];
