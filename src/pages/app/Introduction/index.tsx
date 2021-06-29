import * as Api from 'api';
import Introduction from 'components/Introduction';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { wrapper } from 'store/store';

function IntroductionPage({ introductionInfo }: any) {
  console.log('🚀 ~ 받는', introductionInfo);

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
    const introductionInfo = await Api.introduction.getIntroduction();
    console.log('🚀 ~ introductionInfo', introductionInfo);

    return {
      props: { introductionInfo }
    };
  }
);

export default IntroductionPage;
