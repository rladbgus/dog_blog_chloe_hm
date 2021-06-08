import React from 'react';
import Search from 'components/Home/Search';
import Sort from 'components/Home/Sort';
import DogCards from 'components/Home/DogCards';

function Home() {
  return (
    <>
      <Sort />
      <Search />
      <DogCards />
    </>
  );
}

export default Home;
