import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const Panton = localFont({ src: "./fonts/Panton-Bold.otf" });
// const Avenir_Black = localFont({ src: "./fonts/AvenirLTStd-Black.otf" });
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
    h1: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "4rem", // 64px
      lineHeight: 1.2,
      "@media (max-width:1440px)": {
        fontSize: "3rem", // 56px
        lineHeight: 1,
      },
      "@media (max-width:1200px)": {
        fontSize: "3rem", // 48px
      },
      "@media (max-width:900px)": {
        fontSize: "2.25rem", // 36px
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
        lineHeight: "42px",
      },
    },
    h2: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "3rem",
      [`@media (max-width:900px)`]: { fontSize: "2.25rem" },
    },
    h3: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "2.625rem", // 42px
      [`@media (max-width:900px)`]: { fontSize: "2rem" },
      [`@media (max-width:600px)`]: { fontSize: "1.75rem" },
    },
    h4: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "2.25rem",
    },
    h5: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
    },
    h6: {
      fontFamily: Panton.style.fontFamily,
      fontSize: "1rem",
    },
    body1: {
      fontFamily: Avenir_Roman.style.fontFamily,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      [`@media (max-width:600px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.3125rem",
      },
    },
    body2: {
      fontFamily: Avenir_Roman.style.fontFamily,
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl", // defaultnya tetap xl
      },
      styleOverrides: {
        root: {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          [`@media (min-width:600px)`]: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },

          // MacBook 12 inch (<= 1280px)
          [`@media (max-width:1280px)`]: {
            maxWidth: "100%", // biar adaptif penuh
            marginLeft: "auto",
            marginRight: "auto",
          },

          // MacBook 13 inch (<= 1440px)
          [`@media (max-width:1440px)`]: {
            maxWidth: "960px", // ukuran 'md' supaya pas
          },

          // MacBook 14 inch (<= 1512px)
          [`@media (max-width:1512px)`]: {
            maxWidth: "1280px", // ukuran 'lg'
          },

          // MacBook 16 inch dan lebih (default)
          [`@media (min-width:1728px)`]: {
            maxWidth: "1440px", // tetap bisa dibatasi agar tidak terlalu melebar
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: Panton.style.fontFamily,
          fontSize: "0.875rem",
          lineHeight: "1.2rem",
          padding: "1.125rem 2rem", // 18px 32px
          borderRadius: "8px",
          textTransform: "capitalize",
          "@media (max-width:600px)": {
            padding: "0.625rem 1rem", // 10px 16px
            borderRadius: "4px",
          },
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
            padding: "1.125rem 1.25rem", // 18px 20px
            fontSize: "1rem",
            "@media (max-width:600px)": {
              padding: "0.625rem 1rem", // 10px 16px
              fontSize: "0.875rem",
            },
          },
        },
      },
    },
  },
});

export default theme;
