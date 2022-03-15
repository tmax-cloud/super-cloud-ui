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
      primaryBg: string;
      primaryHoverBg: string;
      disabled: string;
      disabledBg: string;
      dangerBg: string;
    };
    chart: {
      blue100: string;
      blue300: string;
      green400: string;
      black400: string;
      black500: string;
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
    chip: {
      text: string;
      background: string;
      border: string;
      icon: string;
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
      primaryBg: string;
      primaryHoverBg: string;
      disabled: string;
      disabledBg: string;
      dangerBg: string;
    };
    chart: {
      blue100: string;
      blue300: string;
      green400: string;
      black400: string;
      black500: string;
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
    chip: {
      text: string;
      background: string;
      border: string;
      icon: string;
    };
  }
}

declare module '@mui/material/styles/createTypography' {
  type Variant = 'global' | 'tooltip';

  interface Typography {
    global: TypographyStyle & GlobalFontStyle;
    tooltip: TypographyStyle;
    textfield: TypographyStyle;
    chip: TypographyStyle;
  }
  interface TypographyOptions {
    global?: TypographyStyleOptions & GlobalFontStyle;
    tooltip?: TypographyStyleOptions;
    textfield?: TypographyStyleOptions;
    chip?: TypographyStyle;
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
  chip: {
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
