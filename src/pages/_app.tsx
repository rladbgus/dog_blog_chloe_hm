import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'pages/Loading';
import React, { useState } from 'react';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/them';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 로딩기능
  React.useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/public/favicon.ico" key="shortcutIcon" />s
      </Head>
      <Layout>
        {isLoading ? <Loading /> : <Component {...pageProps} />}
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
