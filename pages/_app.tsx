import type { AppProps } from "next/app";
import tw, { GlobalStyles, css } from "twin.macro";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
