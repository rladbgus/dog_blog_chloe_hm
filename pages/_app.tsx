import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

export default MyApp;
