import DogCardList from 'components/Home/DogCardList';
import Search from 'components/Home/Search';
import Sort from 'components/Home/Sort';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // if (scrollInfos) {
    //   setScrollInfos(localStorage.getItem('scroll_pos'));
    //   window.scrollTo(0, scrollInfos);
    //   // scrollRemove();
    // }

    return () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      console.log('🚀 ~ scrollPosition', scrollPosition);
      // console.log('🚀 ~ window.scrollY', window.scrollY);
      // sessionStorage.setItem('scroll_pos', window.scrollY);
    };
  }, []);

  return (
    <>
      <Sort />
      <Search />
      <DogCardList isHome />
    </>
  );
}

export default Home;
