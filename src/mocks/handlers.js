import { rest } from 'msw';

export const handlers = [
  rest.get('/api/kubernetes/api/v1/services/', (req, res, ctx) => {
    return res(
      ctx.json({
        kind: 'ServiceList',
        apiVersion: 'v1',
        metadata: {
          selfLink: '/api/v1/services',
          resourceVersion: '105697845',
        },
        items: [
          {
            metadata: {
              name: 'api-gateway',
              namespace: 'api-gateway-system',
              selfLink: '/api/v1/namespaces/api-gateway-system/services/api-gateway',
              uid: '3169d866-b4a8-4b24-8064-3e2766cf9919',
              resourceVersion: '1211332',
              creationTimestamp: '2021-12-13T02:40:18Z',
              labels: {
                'app.kubernetes.io/component': 'reverse-proxy',
                'app.kubernetes.io/managed-by': 'tmax-cloud',
                'app.kubernetes.io/name': 'traefik',
                'app.kubernetes.io/part-of': 'api-gateway',
              },
              annotations: {
                'kubectl.kubernetes.io/last-applied-configuration':
                  '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"reverse-proxy","app.kubernetes.io/managed-by":"tmax-cloud","app.kubernetes.io/name":"traefik","app.kubernetes.io/part-of":"api-gateway"},"name":"api-gateway","namespace":"api-gateway-system"},"spec":{"ports":[{"name":"traefik","port":9000,"protocol":"TCP","targetPort":"traefik"},{"name":"web","port":80,"protocol":"TCP","targetPort":"web"},{"name":"websecure","port":443,"protocol":"TCP","targetPort":"websecure"},{"name":"k8s","port":6443,"protocol":"TCP","targetPort":"k8s"}],"selector":{"app":"traefik","app.kubernetes.io/component":"reverse-proxy","app.kubernetes.io/managed-by":"tmax-cloud","app.kubernetes.io/name":"traefik","app.kubernetes.io/part-of":"api-gateway"},"sessionAffinity":"None","type":"LoadBalancer"}}\n',
              },
              managedFields: [
                {
                  manager: 'controller',
                  operation: 'Update',
                  apiVersion: 'v1',
                  time: '2021-12-13T02:40:18Z',
                  fieldsType: 'FieldsV1',
                  fieldsV1: {
                    'f:status': {
                      'f:loadBalancer': {
                        'f:ingress': {},
                      },
                    },
                  },
                },
                {
                  manager: 'kubectl-client-side-apply',
                  operation: 'Update',
                  apiVersion: 'v1',
                  time: '2021-12-13T02:40:18Z',
                  fieldsType: 'FieldsV1',
                  fieldsV1: {
                    'f:metadata': {
                      'f:annotations': {
                        '.': {},
                        'f:kubectl.kubernetes.io/last-applied-configuration': {},
                      },
                      'f:labels': {
                        '.': {},
                        'f:app.kubernetes.io/component': {},
                        'f:app.kubernetes.io/managed-by': {},
                        'f:app.kubernetes.io/name': {},
                        'f:app.kubernetes.io/part-of': {},
                      },
                    },
                    'f:spec': {
                      'f:externalTrafficPolicy': {},
                      'f:ports': {
                        '.': {},
                        'k:{"port":80,"protocol":"TCP"}': {
                          '.': {},
                          'f:name': {},
                          'f:port': {},
                          'f:protocol': {},
                          'f:targetPort': {},
                        },
                        'k:{"port":443,"protocol":"TCP"}': {
                          '.': {},
                          'f:name': {},
                          'f:port': {},
                          'f:protocol': {},
                          'f:targetPort': {},
                        },
                        'k:{"port":6443,"protocol":"TCP"}': {
                          '.': {},
                          'f:name': {},
                          'f:port': {},
                          'f:protocol': {},
                          'f:targetPort': {},
                        },
                        'k:{"port":9000,"protocol":"TCP"}': {
                          '.': {},
                          'f:name': {},
                          'f:port': {},
                          'f:protocol': {},
                          'f:targetPort': {},
                        },
                      },
                      'f:selector': {
                        '.': {},
                        'f:app': {},
                        'f:app.kubernetes.io/component': {},
                        'f:app.kubernetes.io/managed-by': {},
                        'f:app.kubernetes.io/name': {},
                        'f:app.kubernetes.io/part-of': {},
                      },
                      'f:sessionAffinity': {},
                      'f:type': {},
                    },
                  },
                },
              ],
            },
            spec: {
              ports: [
                {
                  name: 'traefik',
                  protocol: 'TCP',
                  port: 9000,
                  targetPort: 'traefik',
                  nodePort: 31751,
                },
                {
                  name: 'web',
                  protocol: 'TCP',
                  port: 80,
                  targetPort: 'web',
                  nodePort: 30958,
                },
                {
                  name: 'websecure',
                  protocol: 'TCP',
                  port: 443,
                  targetPort: 'websecure',
                  nodePort: 30860,
                },
                {
                  name: 'k8s',
                  protocol: 'TCP',
                  port: 6443,
                  targetPort: 'k8s',
                  nodePort: 31407,
                },
              ],
              selector: {
                app: 'traefik',
                'app.kubernetes.io/component': 'reverse-proxy',
                'app.kubernetes.io/managed-by': 'tmax-cloud',
                'app.kubernetes.io/name': 'traefik',
                'app.kubernetes.io/part-of': 'api-gateway',
              },
              clusterIP: '10.96.225.224',
              type: 'LoadBalancer',
              sessionAffinity: 'None',
              externalTrafficPolicy: 'Cluster',
            },
            status: {
              loadBalancer: {
                ingress: [
                  {
                    ip: '192.168.9.141',
                  },
                ],
              },
            },
          },
          {
            metadata: {
              name: 'console',
              namespace: 'api-gateway-system',
              selfLink: '/api/v1/namespaces/api-gateway-system/services/console',
              uid: '9a1f0543-ed1a-4335-a604-6ca898dada0c',
              resourceVersion: '96329224',
              creationTimestamp: '2022-02-09T23:26:29Z',
              labels: {
                'app.kubernetes.io/component': 'webserver',
                'app.kubernetes.io/instance': 'console-ck-master',
                'app.kubernetes.io/managed-by': 'Helm',
                'app.kubernetes.io/name': 'console',
                'app.kubernetes.io/part-of': 'api-gateway',
                'app.kubernetes.io/version': '5.0.42.4',
                'helm.sh/chart': 'console-0.1.0',
              },
              annotations: {
                createdTime: '2022-02-10T08:26:29.288982552+09:00',
                creator: 'kubernetes-admin',
                'kubectl.kubernetes.io/last-applied-configuration':
                  '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/component":"webserver","app.kubernetes.io/instance":"console-ck-master","app.kubernetes.io/managed-by":"Helm","app.kubernetes.io/name":"console","app.kubernetes.io/part-of":"api-gateway","app.kubernetes.io/version":"5.0.42.4","helm.sh/chart":"console-0.1.0"},"name":"console","namespace":"api-gateway-system"},"spec":{"ports":[{"name":"http","port":31303,"protocol":"TCP","targetPort":"http"}],"selector":{"app.kubernetes.io/instance":"console-ck-master","app.kubernetes.io/name":"console"},"type":"ClusterIP"}}\n',
                updatedTime: '2022-02-10T08:26:29.288982552+09:00',
                updater: 'kubernetes-admin',
              },
              managedFields: [
                {
                  manager: 'argocd-application-controller',
                  operation: 'Update',
                  apiVersion: 'v1',
                  time: '2022-02-09T23:26:29Z',
                  fieldsType: 'FieldsV1',
                  fieldsV1: {
                    'f:metadata': {
                      'f:annotations': {
                        '.': {},
                        'f:kubectl.kubernetes.io/last-applied-configuration': {},
                      },
                      'f:labels': {
                        '.': {},
                        'f:app.kubernetes.io/component': {},
                        'f:app.kubernetes.io/instance': {},
                        'f:app.kubernetes.io/managed-by': {},
                        'f:app.kubernetes.io/name': {},
                        'f:app.kubernetes.io/part-of': {},
                        'f:app.kubernetes.io/version': {},
                        'f:helm.sh/chart': {},
                      },
                    },
                    'f:spec': {
                      'f:ports': {
                        '.': {},
                        'k:{"port":31303,"protocol":"TCP"}': {
                          '.': {},
                          'f:name': {},
                          'f:port': {},
                          'f:protocol': {},
                          'f:targetPort': {},
                        },
                      },
                      'f:selector': {
                        '.': {},
                        'f:app.kubernetes.io/instance': {},
                        'f:app.kubernetes.io/name': {},
                      },
                      'f:sessionAffinity': {},
                      'f:type': {},
                    },
                  },
                },
              ],
            },
            spec: {
              ports: [
                {
                  name: 'http',
                  protocol: 'TCP',
                  port: 31303,
                  targetPort: 'http',
                },
              ],
              selector: {
                'app.kubernetes.io/instance': 'console-ck-master',
                'app.kubernetes.io/name': 'console',
              },
              clusterIP: '10.96.229.111',
              type: 'ClusterIP',
              sessionAffinity: 'None',
            },
            status: {
              loadBalancer: {},
            },
          },
        ],
      }),
    );
  }),
];
