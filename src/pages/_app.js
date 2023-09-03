import "animate.css";
import "aos/dist/aos.css";
import "@fontsource/inter";
import "@/styles/globals.css";
// Globals
import AOS from "aos";
import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Wrapper from "@/store/wrapper";
// MUI
import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

//!Proggress bar page transition with NProgress
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  React.useEffect(() => {
    console.log(`APP VERSION : v${process.env.NEXT_PUBLIC_APP_VERSION}`);

    AOS.init({
      delay: 10,
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
