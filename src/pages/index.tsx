import React from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import { GetServerSideProps } from 'next';

// interface Props {
//   dogs: object;
// }

function HomePage(props) {
  console.log('🚀 ~ props', props);

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
