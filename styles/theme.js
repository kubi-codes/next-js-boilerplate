import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "40px",
    },
    h2: {
      fontSize: "35px",
    },
    h4: {
      fontWeight: "600",
      fontSize: "36px",
    },
    h5: {
      fontWeight: "600",
      fontSize: "25px",
    },
    h6: {
      fontWeight: "600",
      fontSize: "16px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
      color: "#646670",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        color: "dark",
      },
      styleOverrides: {
        contained: {
          borderRadius: "0px",
          padding: "8px 16px",
        },
      },
    },
  },
});

export default theme;
