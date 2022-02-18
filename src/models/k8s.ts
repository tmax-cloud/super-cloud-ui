import { K8sKind } from '../types';

export const ServiceModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Service',
  plural: 'services',
  abbr: 'S',
  namespaced: true,
  kind: 'Service',
  id: 'service',
  labelPlural: 'Services',
};
