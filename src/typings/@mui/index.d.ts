import '@material-ui/core/styles';

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
  }
}
