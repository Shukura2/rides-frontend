import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakPoints";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // adds the `xxl` breakpoint
  }
}

const theme = createTheme({
  breakpoints: { ...breakpoints },
});

export default theme;
