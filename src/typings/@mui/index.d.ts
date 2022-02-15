import '@material-ui/core/styles';

declare module '@mui/material/styles' {
  interface ExtendedTheme {
    spaces: Space;
  }
  interface Theme extends ExtendedTheme {}
  interface ThemeOptions extends ExtendedTheme {}
}
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    global: {
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
  }
  interface PaletteOptions {
    global: {
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
  }
}

declare module '@mui/material/styles/createTypography' {
  type Variant = 'global' | 'tooltip';

  interface Typography {
    global: TypographyStyle & GlobalFontStyle;
    tooltip: TypographyStyle;
  }
  interface TypographyOptions {
    global?: TypographyStyleOptions & GlobalFontStyle;
    tooltip?: TypographyStyleOptions;
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
}
