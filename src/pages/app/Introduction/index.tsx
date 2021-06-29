import Introduction from 'components/Introduction';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { wrapper } from 'store/store';

function IntroductionPage({ introductionData }: any) {
  console.log('🚀 ~ 받는', introductionData);

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
    // const introductionData = await Api.introduction.getIntroduction();
    // console.log('🚀 ~ introductionData', introductionData);

    return {
      // props: { introductionData }
    };
  }
);

export default IntroductionPage;
