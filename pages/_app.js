import * as React from "react";
import AOS from "aos";
import App from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import PropTypes from "prop-types";
import MainLayout from "components/layouts/MainLayout";
import CssBaseline from "@mui/material/CssBaseline";
import Maintenance from "components/layouts/Maintenance";
import createEmotionCache from "styles/createEmotionCache";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";
import "styles/globals.scss";
import "aos/dist/aos.css";

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

//!Proggress bar page transition with NProgress
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  componentDidMount() {
    console.log(`APP VERSION : v${process.env.NEXT_PUBLIC_APP_VERSION}`);
    AOS.init({
      delay: 10,
      duration: 1500,
      once: true,
    });
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const {
      Component,
      pageProps,
      emotionCache = clientSideEmotionCache,
    } = this.props;

    const isMaintenance =
      process.env.NEXT_PUBLIC_MAINTENANCE &&
      process.env.NEXT_PUBLIC_MAINTENANCE?.toLocaleLowerCase() === "true";

    const isUseLayout = Component.useMainLayout;
    const pageApp = process.env.NEXT_PUBLIC_APP_NAME;
    const pageTitle = Component.title
      ? `${pageApp} | ${Component.title}`
      : pageApp;

    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>{pageTitle}</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {isMaintenance ? (
            <Maintenance />
          ) : (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {isUseLayout ? (
                  <MainLayout {...pageProps}>
                    <Component {...pageProps} />
                  </MainLayout>
                ) : (
                  <Component {...pageProps} />
                )}
              </PersistGate>
            </Provider>
          )}
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
