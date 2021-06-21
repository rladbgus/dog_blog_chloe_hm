import DogCardList from 'components/Home/DogCardList';
import Search from 'components/Home/Search';
import Sort from 'components/Home/Sort';
import React from 'react';

function Home() {
  return (
    <>
      <Sort />
      <Search />
      <DogCardList isHome />
    </>
  );
}

export default Home;
