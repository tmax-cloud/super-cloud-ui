export interface K8sModelType {
  apiVersion: string;
  label: string;
  plural: string;
  abbr: string;
  namespaced: boolean;
  kind: string;
  id: string;
  labelPlural: string;
}

export const ServiceModel: K8sModelType = {
  apiVersion: 'v1',
  label: 'Service',
  plural: 'services',
  abbr: 'S',
  namespaced: true,
  kind: 'Service',
  id: 'service',
  labelPlural: 'Services',
};
