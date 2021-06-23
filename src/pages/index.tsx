import useScrollMove from 'common/hooks/useScroll';
import Home from 'components/Home';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { END } from 'redux-saga';
import { getDogsData } from 'store/modules/dogsData';
import { wrapper } from 'store/store';

function HomePage() {
  // 스크롤유지기능
  useScrollMove('home_scroll_pos', true);

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home />
    </>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(getDogsData());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  }
);

export default HomePage;
