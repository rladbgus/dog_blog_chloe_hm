import React, { useState } from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsData } from '../store/modules/dogsData';
import { useStore } from 'react-redux';

// interface Props {
//   dogs: object;
// }

function HomePage(props) {
  // console.log('🚀 ~ props', props);
  // const store = useStore((state) => state);
  // // console.log('🚀 ~ store', store);
  // const [aaa, setAaa] = useState<string>('');
  // const counter = useSelector((state) => state);
  // console.log('🚀 ~ counter', counter);

  // const dispatch = useDispatch();
  // dispatch(getDogsData('123123'));

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

// redux + redux saga
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
