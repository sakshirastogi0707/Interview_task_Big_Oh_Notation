import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#3c3c3c",
      contrastText: "#fff",
    },

    error: {
      main: "#f44336",
    },
  },
});

export default theme;
