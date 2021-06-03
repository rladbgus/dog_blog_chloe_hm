import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsData } from '../store/modules/dogsData';

// interface Props {
//   dogs: object;
// }

function HomePage(props) {
  const [aaa, setAaa] = useState<string>('');

  const dispatch = useDispatch();
  // dispatch(getDogsData());

  const storeData = useSelector((state) => state);
  console.log('🚀 ~ storeData', storeData);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.thedogapi.com/v1/breeds');
  const dogs = await res.json();

  return {
    props: {
      dogs
      // name: dogs.name,
      // life_span: dogs.life_span,
      // imageUrl: dogs.image.url
    }
  };
};
