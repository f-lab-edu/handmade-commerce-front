import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: grey.A200,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
