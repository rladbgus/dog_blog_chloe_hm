// import { wrapper } from 'store/store';
import * as Api from 'api';
import Introduction from 'components/Introduction';
// import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

function IntroductionPage({ res }: any) {
  // console.log('🚀 ~ 받는', res);

  useEffect(() => {
    Api.introduction
      .getIntroduction()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>
      <Introduction />
    </>
  );
}

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   async () => {
//     const res = await axios.get('/aaa');
//     console.log('보내는', res);
//     return {
//       props: { res }
//     };
//   }
// );

export default IntroductionPage;
