import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Home from '../../components/Home';

function HomePage() {
  const [list, setList] = useState([]);
  const API = 'https://api.thedogapi.com/v1/breeds';

  useEffect(() => {
    axios.get(API).then((res) => {
      console.log('🚀 ~ res', res);
      setList(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home list={list} />
    </>
  );
}

export default HomePage;
