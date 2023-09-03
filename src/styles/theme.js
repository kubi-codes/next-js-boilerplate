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
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    h2: {
      fontSize: "35px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    h4: {
      fontSize: "36px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    h5: {
      fontSize: "25px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    h6: {
      fontSize: "16px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    body1: {
      fontSize: "16px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
    },
    body2: {
      fontSize: "14px",
      fontFamily: "inter, Roboto, Helvetica, Arial, sans-serif",
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
