import React, { useState } from 'react';
import DogCard from 'components/Home/DogCard';
import Search from 'components/Home/Search';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Sort from 'components/Home/Sort';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getDogsData, moreDogsData } from 'store/modules/dogsData';

function Home() {
  const storeDogsData = useSelector((state) => state.dogsData);
  const dogsData = storeDogsData.dogsData;
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(100);

  // 스크롤시 강아지데이터 호출
  const HandleMoreDogsData = () => {
    const query = {
      page: page
    };
    console.log('🚀 ~ query', query);
    dispatch(moreDogsData(query));
    // setHasMore( === hasMore)
    setPage(page + 1);
    setPage(limit + 50);
  };

  return (
    <>
      <Sort />
      <Search />

      <InfiniteScroll
        dataLength={dogsData.length}
        loader={<h4>Loading...</h4>}
        hasMore={true}
        next={HandleMoreDogsData}
        scrollThreshold="50px"
        style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <DogCardS>
          {dogsData.map((dogData: any) => {
            // console.log('🚀 ~ dogData', dogData);
            // const dogDataQuery = {
            //   id: dogData.id,
            //   name: dogData.name,
            //   imageUrl: dogData.image.url,
            //   life_span: dogData.life_span,
            //   height: dogData.height
            // };
            return (
              <Link
                href={{ pathname: `/app/detail/${dogData.id}`, query: dogData }}
                key={dogData.id}>
                <a>
                  <DogCard
                    key={dogData.id}
                    name={dogData.name}
                    life_span={dogData.life_span}
                    imageUrl={dogData.image.url}
                  />
                </a>
              </Link>
            );
          })}
        </DogCardS>
      </InfiniteScroll>
    </>
  );
}

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default Home;
