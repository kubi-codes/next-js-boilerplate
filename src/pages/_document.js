import theme from "@/styles/theme";
import { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";

export default function Document(props) {
  const { title, seo } = props?.__NEXT_DATA__?.props?.pageProps;

  return (
    <Html lang="en">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={title} />
        <meta name="description" content={seo?.["id"]?.desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo?.['id']?.url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={seo?.["id"]?.desc} />
        <meta property="og:image" content={seo?.image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo?.['id']?.url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={seo?.["id"]?.desc} />
        <meta property="twitter:image" content={seo?.image} />

        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
