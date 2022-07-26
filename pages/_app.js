import * as React from "react";
import AOS from "aos";
import App from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "styles/createEmotionCache";
import { useStore, initializeStore } from "redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
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

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // get store from initial redux
  const store = useStore(pageProps.redux);

  React.useEffect(() => {
    AOS.init({
      delay: 10,
      duration: 1500,
      once: true,
    });
    // AOS.refresh();
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {/* Provider for redux */}
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />, { ...pageProps })}
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const reduxStore = initializeStore();

  appProps.pageProps.redux = reduxStore.getState();
  return { ...appProps };
};
