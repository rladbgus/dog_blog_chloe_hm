import React from 'react';
import Head from 'next/head';
import Home from 'components/Home';
import { getDogsData } from 'store/modules/dogsData';
import { GetServerSideProps } from 'next';
import { wrapper } from '../store/store';
import { END } from 'redux-saga';

function HomePage() {
  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home />
    </>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getDogsData());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  }
);
