import '@material-ui/core/styles';

declare module '@mui/material/styles' {
  interface ExtendedTheme {
    spaces: Space;
    boxShadows: BoxShadow;
  }
  interface Theme extends ExtendedTheme {}
  interface ThemeOptions extends ExtendedTheme {}
}
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    global: {
      color100: string;
      bg100: string;
      bgDark100: string;
      danger100: string;
    };
    button: {
      primaryBackground: string;
      primaryHoverBackground: string;
      disabled: string;
      disabledBackground: string;
      dangerBackground: string;
      link: string;
      linkBackground: string;
      linkHover: string;
      linkDisabledBackground: string;
    };
    chart: {
      blue100: string;
      blue300: string;
      green400: string;
      black400: string;
      black500: string;
    };
    chip: {
      text: string;
      background: string;
      border: string;
      icon: string;
    };
    chipGroup: {
      background: string;
      icon: string;
    };
    tooltip: {
      content: string;
      contentBg: string;
    };
    textfield: {
      background: string;
      border: string;
      borderBottom: string;
      placeholder: string;
      hoverBorderBottom: string;
      disabled: string;
      disabledBackground: string;
      disabledBorder: string;
      readonlyBackground: string;
      errorBorderBottom: string;
    };
    select: {
      color: string;
      disabledBg: string;
      border: string;
      borderBottom: string;
      activeBorderBottom: string;
      hoverBorderBottom: string;
      focusBorderBottom: string;
      itemHoverBg: string;
    };
  }
  interface PaletteOptions {
    global: {
      color100: string;
      bg100: string;
      bgDark100: string;
      danger100: string;
    };
    button: {
      primaryBackground: string;
      primaryHoverBackground: string;
      disabled: string;
      disabledBackground: string;
      dangerBackground: string;
      link: string;
      linkBackground: string;
      linkHover: string;
      linkDisabledBackground: string;
    };
    chart: {
      blue100: string;
      blue300: string;
      green400: string;
      black400: string;
      black500: string;
    };
    chip: {
      text: string;
      background: string;
      border: string;
      icon: string;
    };
    chipGroup: {
      background: string;
      icon: string;
    };
    tooltip: {
      content: string;
      contentBg: string;
    };
    textfield: {
      background: string;
      border: string;
      borderBottom: string;
      placeholder: string;
      hoverBorderBottom: string;
      disabled: string;
      disabledBackground: string;
      disabledBorder: string;
      readonlyBackground: string;
      errorBorderBottom: string;
    };
    select: {
      color: string;
      disabledBg: string;
      border: string;
      borderBottom: string;
      activeBorderBottom: string;
      hoverBorderBottom: string;
      focusBorderBottom: string;
      itemHoverBg: string;
    };
  }
}

declare module '@mui/material/styles/createTypography' {
  type Variant = 'global' | 'tooltip';

  interface Typography {
    global: TypographyStyle & GlobalFontStyle;
    chip: TypographyStyle;
    chipGroup: TypographyStyle;
    tooltip: TypographyStyle;
    textfield: TypographyStyle;
    select: TypographyStyle;
  }
  interface TypographyOptions {
    global?: TypographyStyleOptions & GlobalFontStyle;
    chip?: TypographyStyle;
    chipGroup?: TypographyStyle;
    tooltip?: TypographyStyleOptions;
    textfield?: TypographyStyleOptions;
    select?: TypographyStyleOptions;
  }
}

export interface GlobalFontStyle {
  fontSizeXs: number | string;
  fontSizeSm: number | string;
  fontSizeMd: number | string;
  fontSizeLg: number | string;
  fontSizeXl: number | string;
  fontSize2xl: number | string;
  fontSize3xl: number | string;
  fontSize4xl: number | string;
}

export interface Space {
  global: {
    spacerXs: string;
    spacerSm: string;
    spacerMd: string;
    spacerLg: string;
    spacerXl: string;
    spacer2xl: string;
    spacer3xl: string;
    spacer4xl: string;
  };
  chip: {
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
    buttonMarginTop: string;
    buttonMarginRight: string;
    buttonMarginBottom: string;
    buttonMarginLeft: string;
  };
  chipGroup: {
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
    labelMarginRight: string;
    listMarginRight: string;
    listMarginBottom: string;
    listItemMarginRight: string;
    listItemMarginBottom: string;
    closeMarginTop: string;
    closeMarginBottom: string;
  };
  tooltip: {
    contentPaddingTop: string;
    contentPaddingRight: string;
    contentPaddingBottom: string;
    contentPaddingLeft: string;
  };
  textfield: {
    paddingX: string;
    paddingY: string;
    errorPaddingBottom: string;
    errorPaddingRight: string;
  };
  select: {
    paddingX: string;
    paddingY: string;
  };
}

export interface BoxShadow {
  global: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  autocomplete: {
    boxShadow: string;
  };
}
