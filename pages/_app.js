import * as React from "react";
import AOS from "aos";
import App from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import PropTypes from "prop-types";
import Seo from "components/general/Seo";
import MainLayout from "components/layouts/MainLayout";
import CssBaseline from "@mui/material/CssBaseline";
import Maintenance from "components/layouts/Maintenance";
import createEmotionCache from "styles/createEmotionCache";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { store, persistor } from "../redux/store";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@emotion/react";
// import { getAnalytics } from "firebase/analytics";
import { Provider } from "react-redux";
import client from "utils/apollo";
import NProgress from "nprogress";
import Router from "next/router";
// import firebase from "firebaseConfig";
import "styles/globals.scss";
import "aos/dist/aos.css";
import "animate.css";

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

    // getAnalytics(firebase);

    // firebase.analytics();
    AOS.init({
      delay: 10,
      duration: 1500,
      once: true,
    });
  }

  MainComponent() {
    const { Component, pageProps } = this.props;
    const isDisabledLayout = Component.disabledLayout;

    if (!isDisabledLayout) {
      return (
        <MainLayout {...pageProps}>
          <Component {...pageProps} />
        </MainLayout>
      );
    } else {
      return <Component {...pageProps} />;
    }
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { pageProps, emotionCache = clientSideEmotionCache } = this.props;
    const { url, title } = pageProps ?? {};

    const isMaintenance =
      process.env.NEXT_PUBLIC_MAINTENANCE &&
      process.env.NEXT_PUBLIC_MAINTENANCE?.toLocaleLowerCase() === "true";

    const isUsePersist =
      process.env.NEXT_PUBLIC_PERSIST_USE &&
      process.env.NEXT_PUBLIC_PERSIST_USE?.toLocaleLowerCase() === "true";

    const pageApp = process.env.NEXT_PUBLIC_APP_NAME;
    const pageTitle = title ? `${pageApp} | ${title}` : pageApp;

    return (
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{pageTitle}</title>
            <Seo url={url} />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            {isMaintenance ? (
              <Maintenance />
            ) : (
              <Provider store={store}>
                {isUsePersist ? (
                  <PersistGate loading={null} persistor={persistor}>
                    {this.MainComponent()}
                  </PersistGate>
                ) : (
                  this.MainComponent()
                )}
              </Provider>
            )}
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
