import '@material-ui/core/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    button: {
      primaryBg: string;
      primaryHoverBg: string;
      disabled: string;
      disabledBg: string;
    };
  }
  interface PaletteOptions {
    button: {
      primaryBg: string;
      primaryHoverBg: string;
      disabled: string;
      disabledBg: string;
    };
  }
}
