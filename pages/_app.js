import * as React from "react";
import AOS from "aos";
import App from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "styles/createEmotionCache";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";
import "styles/globals.css";
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
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }

  componentDidMount() {
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

    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
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
