import Introduction from 'components/Introduction';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { wrapper } from 'store/store';

function IntroductionPage({ res }: any) {
  console.log('🚀 ~ 받는', res);

  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>
      <Introduction />
    </>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async () => {
    // const res = await axios.get('/introduction');
    // console.log('보내는', res);
    return {
      props: {}
    };
  }
);

export default IntroductionPage;
