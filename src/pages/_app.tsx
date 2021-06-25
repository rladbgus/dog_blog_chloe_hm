import Layout from 'components/Layout';
import firebase from 'firebase';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'pages/Loading';
import React, { useEffect, useState } from 'react';
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

  // firebase 세팅
  const firebaseConfig = {
    apiKey: 'AIzaSyBY_9DQLLZWkBu07LRXhRc9j2Ox4Wvrx6o',
    authDomain: 'dog-blog-29d8f.firebaseapp.com',
    databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com',
    projectId: 'dog-blog-29d8f',
    storageBucket: 'dog-blog-29d8f.appspot.com',
    messagingSenderId: '919821521993',
    appId: '1:919821521993:web:ff0855fbea794365409b98',
    measurementId: 'G-NY64PXGRL7'
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    const messaging = firebase.messaging();

    Notification.requestPermission()
      .then(function () {
        return messaging.getToken();
      })
      .then(function (token) {
        console.log('token', token);
      })
      .catch(function (err) {
        console.error('fcm error : ', err);
      });

    messaging.onMessage(function (payload) {
      console.log('title:', payload.notification.title);
      console.log('body:', payload.notification.body);
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          key="shortcutIcon"
        />
      </Head>
      <Layout>
        {isLoading ? <Loading /> : <Component {...pageProps} />}
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
