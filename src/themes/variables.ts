/* patternfly css variable 참고 */

export const colors = {
  global: {
    color100: '#151515',
    bg100: '#fff',
    bgDark100: '#151515',
    danger100: '#c9190b',
  },
  button: {
    primaryBackground: '#06c',
    primaryHoverBackground: '#004080',
    disabled: '#737679',
    disabledBackground: '#d2d2d2',
    dangerBackground: '#c9190b',
    link: '#06c',
    linkBackground: 'transparent',
    linkHover: '#004080',
    linkDisabledBackground: 'transparent',
  },
  chart: {
    blue100: '#8bc1f7',
    blue300: '#06c',
    green400: '#38812f',
    black400: '#8a8d90',
    black500: '#737679',
  },
  chip: {
    text: '#151515',
    background: '#fff',
    border: '#151515',
    icon: '#737679',
  },
  chipGroup: {
    background: '#f0f0f0',
    icon: '#6a6e73',
  },
  tooltip: {
    content: '#fff',
    contentBg: '#151515',
  },
  textfield: {
    background: '#fff',
    border: '#f0f0f0',
    borderBottom: '#8a8d90',
    placeholder: '#6a6e73',
    hoverBorderBottom: '#06c',
    disabled: '#6a6e73',
    disabledBackground: '#f0f0f0',
    disabledBorder: 'transparent',
    readonlyBackground: '#f0f0f0',
    errorBorderBottom: '#c9190b',
  },
  select: {
    color: '#151515',
    disabledBg: '#f0f0f0',
    border: '#f0f0f0',
    borderBottom: '#8a8d90',
    activeBorderBottom: '#06c',
    hoverBorderBottom: '#06c',
    focusBorderBottom: '#06c',
    itemHoverBg: '#f0f0f0',
  },
};

export const typography = {
  global: {
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeMd: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '1.75rem',
    fontSize4xl: '2.25rem',
  },
  chip: {
    fontSize: '0.75rem',
  },
  chipGroup: {
    fontSize: '0.875rem',
  },
  tooltip: {
    fontSize: '0.875rem',
  },
  textfield: {
    fontSize: '1rem',
  },
  select: {
    fontSize: '1rem',
  },
};

export const spaces = {
  global: {
    spacerXs: '0.25rem',
    spacerSm: '0.5rem',
    spacerMd: '1rem',
    spacerLg: '1.5rem',
    spacerXl: '2rem',
    spacer2xl: '3rem',
    spacer3xl: '4rem',
    spacer4xl: '5rem',
  },
  chip: {
    paddingTop: '0.25rem',
    paddingRight: '0.5rem',
    paddingBottom: '0.25rem',
    paddingLeft: '0.5rem',
    buttonMarginTop: '0.25rem',
    buttonMarginRight: '0.5rem',
    buttonMarginBottom: '0.25rem',
    buttonMarginLeft: '0.5rem',
  },
  chipGroup: {
    paddingTop: '0.5rem',
    paddingRight: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0.5rem',
    labelMarginRight: '0.5rem',
    listMarginRight: 'calc(0.25rem * -1)',
    listMarginBottom: 'calc(0.25rem * -1)',
    listItemMarginRight: '0.25rem',
    listItemMarginBottom: '0.25rem',
    closeMarginTop: 'calc(0.25rem * -1)',
    closeMarginBottom: 'calc(0.25rem * -1)',
  },
  tooltip: {
    contentPaddingTop: '1rem',
    contentPaddingRight: '1.5rem',
    contentPaddingBottom: '1rem',
    contentPaddingLeft: '1.5rem',
  },
  textfield: {
    paddingX: '0.5rem',
    paddingY: 'calc(0.375rem - 1px)',
    errorPaddingBottom: 'calc(0.375rem - 2px)',
    errorPaddingRight: '2rem',
  },
  select: {
    paddingX: '0.5rem',
    paddingY: '0.475rem',
  },
};

export const boxShadows = {
  global: {
    sm: '0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06)',
    md: '0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)',
    lg: '0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)',
    xl: '0 1rem 2rem 0 rgba(3, 3, 3, 0.16), 0 0 0.5rem 0 rgba(3, 3, 3, 0.1)',
  },
  autocomplete: {
    boxShadow: '0 .0625rem .0625rem 0rem rgba(3,3,3,0.05),0 .25rem .5rem .25rem rgba(3,3,3,0.06)',
  },
};
