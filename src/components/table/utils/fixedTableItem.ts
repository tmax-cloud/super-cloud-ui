// API spec상으로 고정되어있는 default한 값들에 대해서만 미리 추가 해두는 방식
// 추후에 메뉴에 dependency있는 특별한 값들에 대해서는 `ref`값으로 하드하게 박아주면 되도록
export const fixedTableItem = {
  name: 'metadata.name',
  namespace: 'metadata.namespace',
  creationTimestamp: 'metadata.creationTimestamp',
};
