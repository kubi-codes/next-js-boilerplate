import "@/styles/globals.css";
import Head from "next/head";
import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import Provider from "@/stores/Provider";
import Main from "@/components/layouts/Main/_main";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider>
          <Main>
            <Component {...pageProps} />
          </Main>
        </Provider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
