import type { AppProps } from "next/app";
import Head from "next/head";
import tw, { GlobalStyles, css } from "twin.macro";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#F59E0B" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="theme-color" content="#FACC15" />
      </Head>
      <GlobalStyles />
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

          #__next {
            min-height: 100%;
          }

          body {
            ${tw`bg-gray-50 dark:bg-gray-900`}
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
