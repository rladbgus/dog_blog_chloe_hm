import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsData } from '../store/modules/dogsData';
// import { GetServerSideProps } from 'next';
// import { connect } from 'react-redux';
// import { wrapper } from '../store/store';

// interface Props {
//   dogs: object;
// }

function HomePage(props) {
  console.log('🚀 ~ props', props);
  const dispatch = useDispatch();
  const storeDogsData = useSelector((state) => state.dogsData);

  useEffect(() => {
    dispatch(getDogsData());
  }, []);

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home dogsData={storeDogsData.dogsData} />
    </>
  );
}

export default HomePage;
// export default connect((state) => state)(HomePage);

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(getDogsData('aaa'));
//     const storeData = store.getState((state) => state);
//     console.log('🚀 ~ storeData', storeData);

//     return {
//       props: {
//         storeData
//         // name: dogs.name,
//         // life_span: dogs.life_span,
//         // imageUrl: dogs.image.url
//       }
//     };
//   }
// );
