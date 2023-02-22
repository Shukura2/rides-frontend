import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakPoints";
import color from "./colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // adds the `xxl` breakpoint
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    black?: Palette["primary"];
    white?: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...color },
});

export default theme;
