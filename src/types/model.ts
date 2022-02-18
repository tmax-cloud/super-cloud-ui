export interface K8sKind {
  apiVersion: string;
  label: string;
  plural: string;
  abbr: string;
  namespaced: boolean;
  kind: string;
  id: string;
  labelPlural: string;
}
