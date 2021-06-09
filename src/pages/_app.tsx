import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/them';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/public/favicon.ico" key="shortcutIcon" />s
      </Head>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
