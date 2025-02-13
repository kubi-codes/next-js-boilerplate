import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const Panton = localFont({ src: "./fonts/Panton-Bold.otf" });
const Avenir_Black = localFont({ src: "./fonts/AvenirLTStd-Black.otf" });
const Avenir_Roman = localFont({ src: "./fonts/AvenirLTStd-Roman.otf" });

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#233E83",
    },
    secondary: {
      main: "#979797",
    },
    warning: {
      main: "#ECB31D",
      contrastText: "#fff",
    },
    success: {
      main: "#128C33",
    },
    info: {
      main: "#A9B3FF",
    },
  },
  typography: {
    h1: { fontFamily: Panton.style.fontFamily, fontSize: "64px" },
    h2: { fontFamily: Panton.style.fontFamily },
    h3: { fontFamily: Panton.style.fontFamily, fontSize: "42px" },
    h4: { fontFamily: Panton.style.fontFamily, fontSize: "36px" },
    h5: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "24px",
      lineHeight: "36px",
    },
    h6: { fontFamily: Panton.style.fontFamily, fontSize: "16px" },
    body1: {
      fontFamily: Avenir_Roman.style.fontFamily,
    },
    body2: {
      fontFamily: Avenir_Roman.style.fontFamily,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: Panton.style.fontFamily,
          fontSize: "14px",
          lineHeight: "19px",
          padding: "18px 32px",
          borderRadius: "8px",
          textTransform: "capitalize",
        },
        outlined: {
          borderWidth: "2px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "2px solid #979797",
            borderRadius: "8px",
          },
          "& input": {
            padding: "18px 20px",
          },
          "& .MuiInputBase-input": { fontSize: "16px" },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
});

export default theme;
